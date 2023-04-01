import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'


//Debug Panel

const gui = new dat.GUI();


//Textures

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')

const matcaps1Texture = textureLoader.load('./textures/matcaps/1.png')
const matcaps2Texture = textureLoader.load('./textures/matcaps/2.png')
const matcaps3Texture = textureLoader.load('./textures/matcaps/3.png')
const matcaps4Texture = textureLoader.load('./textures/matcaps/4.png')
const matcaps5Texture = textureLoader.load('./textures/matcaps/5.png')
const matcaps6Texture = textureLoader.load('./textures/matcaps/6.png')
const matcaps7Texture = textureLoader.load('./textures/matcaps/7.png')
const matcaps8Texture = textureLoader.load('./textures/matcaps/8.png')

const gradient3Texture = textureLoader.load('./textures/gradients/3.jpg')
const gradient5Texture = textureLoader.load('./textures/gradients/5.jpg')
gradient3Texture.minFilter = THREE.NearestFilter
gradient3Texture.magFilter = THREE.NearestFilter
gradient3Texture.generateMipmaps = false

//order must be in positive x, negative x, positive y, negative y, positive z, negative z
const environmentMapTexture = cubeTextureLoader.load([
    './textures/environmentMaps/3/px.jpg',
    './textures/environmentMaps/3/nx.jpg',
    './textures/environmentMaps/3/py.jpg',
    './textures/environmentMaps/3/ny.jpg',
    './textures/environmentMaps/3/pz.jpg',
    './textures/environmentMaps/3/nz.jpg'
])

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Objects

// const material = new THREE.MeshBasicMaterial();
// material.map = doorColorTexture;
// material.color = new THREE.Color('purple')
// material.wireframe = true;
// material.opacity = 0.5
// material.transparent= true
// material.alphaMap = doorAlphaTexture;
//avoid using doubleside since it's more calculations on the gpu
// material.side = THREE.DoubleSide

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcaps8Texture

// const material = new THREE.MeshDepthMaterial()

// const material = new THREE.MeshLambertMaterial();
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color(0x0000ff)

// const material = new THREE.MeshToonMaterial()
// material.gradientMap = gradient3Texture

// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0
// material.roughness = 1
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.05
// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.normalMap = doorNormalTexture
// material.normalScale.set(1, 1)
// material.transparent = true
// material.alphaMap = doorAlphaTexture

const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.envMap = environmentMapTexture

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)
gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.01)
gui.add(material, 'displacementScale').min(0).max(1).step(0.0001)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material,
)
sphere.position.x = -1.5
sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1, 100, 100),
    material
)

plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64,128),
    material
)
torus.position.x = 1.5
torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))
scene.add(sphere, plane, torus)

//Lights

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    sphere.rotation.y = 0.1 * elapsedTime;
    plane.rotation.y = 0.1 * elapsedTime;
    torus.rotation.y = 0.1 * elapsedTime;

    sphere.rotation.x = 0.15 * elapsedTime;
    plane.rotation.x = 0.15 * elapsedTime;
    torus.rotation.x = 0.15 * elapsedTime;
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()