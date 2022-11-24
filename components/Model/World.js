import { loadBirds } from './component/robot/robot.js';
import { createCamera } from './component/camera.js';
import { createLights } from './component/lights.js';
import { createScene } from './component/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let controls;
let renderer;
let scene;
let loop;
class World {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        controls = createControls(camera, renderer.domElement);

        const { ambientLight, mainLight } = createLights();

        loop.updatables.push(controls);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }
    async init() {
        const robot = await loadBirds();
        controls.target.copy(robot.position);
        scene.add(robot);
    }
    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}
export { World };