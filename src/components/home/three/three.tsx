import { useEffect } from 'react';
import * as THREE from 'three';
function Three() {

    useEffect(() => {
        threejs();
    })

    function threejs() {
        console.log("Three js", THREE)
        //canvas
        const canvas = document.querySelector("#webgl")
        // create scene
        const scene = new THREE.Scene()

        // red cube
        const cube1 = new THREE.BoxGeometry(1, 1, 1)
        const cube1material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
        const cube1mesh = new THREE.Mesh(cube1, cube1material)
        scene.add(cube1mesh);

        const cube2 = new THREE.BoxGeometry(1, 1, 1)
        const cube2material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
        const cube2mesh = new THREE.Mesh(cube2, cube2material)
        scene.add(cube2mesh);

        // mesh.position.set(0.7, -0.6, 1);
        const sizes = {
            width: 800,
            height: 600
        }
        // camera
        const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height)
        camera.position.z = 3

        scene.add(camera)

        // Axes helper
        const axesHelper = new THREE.AxesHelper(3)
        scene.add(axesHelper);

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.render(scene, camera)
    }

    return (
        <canvas id='webgl' />
    )
}

export default Three;