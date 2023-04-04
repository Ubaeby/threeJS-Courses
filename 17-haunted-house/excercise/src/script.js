import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()

//Fog

const fog = new THREE.Fog('#262837', 1, 20)
scene.fog = fog

//Cursor Event Listener
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', event => {
    cursor.x = event.clientX / sizes.width + 1
    cursor.y = -(event.clientY / sizes.height + 1)
    console.log(cursor.x, cursor.y)
})

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughenss.jpg')

const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughenss.jpg')

grassColorTexture.repeat.set(8,8)
grassAmbientOcclusionTexture.repeat.set(8,8)
grassNormalTexture.repeat.set(8,8)
grassRoughnessTexture.repeat.set(8,8)

grassColorTexture.wrapS = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
grassNormalTexture.wrapS = THREE.RepeatWrapping
grassRoughnessTexture.wrapS = THREE.RepeatWrapping

grassColorTexture.wrapT = THREE.RepeatWrapping
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
grassNormalTexture.wrapT = THREE.RepeatWrapping
grassRoughnessTexture.wrapT = THREE.RepeatWrapping


/**
 * House
 */
// Group
const house = new THREE.Group()
scene.add(house)

//Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5 ,4),
    new THREE.MeshStandardMaterial({
        map: bricksColorTexture,
        transparent: true,
        aoMap: bricksAmbientOcclusionTexture,
        normalMap: bricksNormalTexture,
        roughnessMap: bricksRoughnessTexture

    })
)
walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2))
walls.position.y = 2.5 / 2
house.add(walls)

//Roof

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({color:'#b35f45'})
)
roof.position.y = 2.5 + 0.5
roof.rotation.y = Math.PI * 0.25
house.add(roof)

//Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2 , 2.2 , 100, 100),
    new THREE.MeshStandardMaterial({ 
        map: doorColorTexture,
        transparent: true,
        alphaMap: doorAlphaTexture,
        aoMap: doorAmbientOcclusionTexture,
        displacementMap: doorHeightTexture,
        displacementScale: 0.1,
        normalMap: doorNormalTexture,
        metalnessMap: doorMetalnessTexture,
        roughnessMap: doorRoughnessTexture
    })
)
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2))
door.position.y = 1
door.position.z = 2.01
house.add(door)

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({color: '#89c854'})

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5,0.5,0.5)
bush1.position.set(0.8,0.2, 2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25,0.25 ,0.25)
bush2.position.set(1.4,0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4,0.4,0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15 ,0.15 ,0.15)
bush4.position.set(-1 ,0.05, 2.6)


house.add(bush1, bush2, bush3, bush4)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
         map: grassColorTexture,
         transparent: true,
         aoMap: grassAmbientOcclusionTexture,
         roughnessMap: grassRoughnessTexture,
         normalMap: grassNormalTexture 
        })
)
floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2))
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
house.add(floor)

//Graves

const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({ color: "#b2b6b1"})

for (let i = 0; i < 25; i++) {

    const angle = Math.random() * (Math.PI * 2)
    const radius = 3 + Math.random() * 6
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    const grave = new THREE.Mesh(graveGeometry, graveMaterial)
    grave.position.set(x, 0.3, z)
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4
    grave.castShadow = true
    graves.add(grave)
}


/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

//Door Light
const doorLight = new THREE.PointLight('#ff7d46', 0.7, 7)
doorLight.visible = true
doorLight.position.set(0, 2.2, 2.7)
house.add(doorLight)


//Ghosts

const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
const ghost3 = new THREE.PointLight('#ffff00', 2, 3)

scene.add(ghost1, ghost2, ghost3)

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
camera.position.x = cursor.x
camera.position.y = 2
camera.position.z = 10
scene.add(camera)

//Flash Light

const flashLight = new THREE.SpotLight('0x0000ff', 1.5 , 10, Math.PI * 0.2, 0.25)
flashLight.visible = true
gui.add(flashLight, 'visible').name('flashLight')
scene.add(flashLight)
scene.add(flashLight.target)

const flashLightHelper = new THREE.CameraHelper(flashLight.shadow.camera)
flashLightHelper.visible = false
gui.add(flashLightHelper, 'visible').name('flashlight helper')
scene.add(flashLightHelper)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.minDistance = 6;
controls.maxDistance = 15;

controls.minPolarAngle = Math.PI / 4
controls.maxPolarAngle = Math.PI / 2.1

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')


//Shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

moonLight.castShadow = true
doorLight.castShadow = true
flashLight.castShadow = true

ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true

walls.castShadow = true
roof.castShadow = true
bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true
bush4.castShadow = true

floor.receiveShadow = true

flashLight.shadow.mapSize.width = 1024
flashLight.shadow.mapSize.height = 1024
flashLight.shadow.camera.fov = 30
flashLight.angle = 0.3
flashLight.decay = 1.4
flashLight.shadow.camera.near = 1
flashLight.shadow.camera.far = 15

doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update Ghost
    const ghost1Angle = elapsedTime * 0.3
    ghost1.position.x = Math.cos(ghost1Angle) * 4
    ghost1.position.y = Math.sin(elapsedTime * 3)
    ghost1.position.z = Math.sin(ghost1Angle) * 4

    const ghost2Angle = -elapsedTime * 0.32
    ghost2.position.x = Math.cos(ghost2Angle) * 5
    ghost2.position.y = Math.sin(elapsedTime * 3) + Math.sin(elapsedTime * 2.5)
    ghost2.position.z = Math.sin(ghost2Angle) * 5

    const ghost3Angle = elapsedTime * 0.18
    ghost3.position.x = Math.cos(ghost3Angle) * (6 + Math.sin(elapsedTime * 0.32))
    ghost3.position.z = Math.sin(ghost3Angle) * (6 + Math.sin(elapsedTime * 0.24))
    ghost3.position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 1.4)

    //Update FlashLight
    flashLight.position.set(camera.position.x, camera.position.y, camera.position.z)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()