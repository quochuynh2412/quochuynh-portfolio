import { Component } from "react";

export default class RightSideBar extends Component {
    render() {
        return (
            <div className='md:fixed md:bottom-0 md:left-6 md:block hidden'>
                <ul className={styles.p}>
                    <li id={styles.fb}>
                        <a href='https://www.facebook.com/quochuynh.2412/' target="_blank" rel="noopener noreferrer">
                            <svg height="28" viewBox="-106 0 512 512" width="28" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
                                <path d="m284.925781 126.402344c8.285157 0 15-6.71875 15-15v-96.402344c0-8.285156-6.714843-15-15-15h-112.472656c-52.566406 0-95.332031 42.765625-95.332031 95.332031v97.46875h-62.121094c-8.285156 0-15 6.714844-15 15v96.398438c0 8.285156 6.714844 15 15 15h62.121094v177.800781c0 8.285156 6.714844 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-177.800781h62.121093c7.152344 0 13.308594-5.046875 14.710938-12.058594l19.277343-96.398437c.882813-4.40625-.257812-8.976563-3.109374-12.453126-2.847657-3.472656-7.105469-5.488281-11.597657-5.488281h-81.402343v-66.398437zm-96.402343 96.398437h78.105468l-13.28125 66.398438h-64.824218c-8.285157 0-15 6.714843-15 15v177.800781h-66.402344v-177.800781c0-8.285157-6.714844-15-15-15h-62.121094v-66.398438h62.121094c8.285156 0 15-6.714843 15-15v-112.46875c0-36.023437 29.308594-65.332031 65.332031-65.332031h97.472656v66.402344h-81.402343c-8.285157 0-15 6.714844-15 15v96.398437c0 8.285157 6.714843 15 15 15zm0 0" />
                            </svg>
                        </a>
                    </li>
                    <li id={styles.ig}>
                        <a href='https://www.instagram.com/quochuynh2412/' target="_blank" rel="noopener noreferrer">
                            <svg height="28" viewBox="0 0 512 512" width="28" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
                                <path d="m256 120.5c-74.714844 0-135.5 60.785156-135.5 135.5s60.785156 135.5 135.5 135.5 135.5-60.785156 135.5-135.5-60.785156-135.5-135.5-135.5zm0 241c-58.171875 0-105.5-47.328125-105.5-105.5s47.328125-105.5 105.5-105.5c58.175781 0 105.5 47.328125 105.5 105.5s-47.324219 105.5-105.5 105.5zm0 0" /><path d="m460.410156 51.589844c-33.265625-33.269532-77.332031-51.589844-124.074218-51.589844h-160.671876c-46.742187 0-90.808593 18.320312-124.074218 51.589844-33.269532 33.265625-51.589844 77.332031-51.589844 124.074218v160.667969c0 46.746094 18.320312 90.8125 51.589844 124.078125 33.265625 33.269532 77.332031 51.589844 124.074218 51.589844h160.671876c46.742187 0 90.808593-18.320312 124.074218-51.589844 33.269532-33.265625 51.589844-77.332031 51.589844-124.078125v-160.667969c0-46.742187-18.320312-90.808593-51.589844-124.074218zm21.589844 284.742187c0 80.320313-65.347656 145.667969-145.664062 145.667969h-160.671876c-80.316406 0-145.664062-65.347656-145.664062-145.667969v-160.667969c0-80.316406 65.347656-145.664062 145.664062-145.664062h160.671876c80.316406 0 145.664062 65.347656 145.664062 145.664062zm0 0" /><path d="m395.511719 101.488281c-3.953125 0-7.820313 1.609375-10.613281 4.402344-2.789063 2.789063-4.386719 6.660156-4.386719 10.597656 0 3.949219 1.597656 7.820313 4.386719 10.609375 2.792968 2.792969 6.660156 4.390625 10.613281 4.390625 3.9375 0 7.808593-1.597656 10.597656-4.390625 2.789063-2.789062 4.402344-6.660156 4.402344-10.609375 0-3.9375-1.613281-7.808593-4.402344-10.597656s-6.660156-4.402344-10.597656-4.402344zm0 0" />
                            </svg>
                        </a>
                    </li>
                    <li id={styles.linkedin}>
                        <a>
                            <svg height="28" viewBox="-8 0 511 512" width="28" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
                                <path d="m111.898438 160.664062h-96.398438c-8.285156 0-15 6.71875-15 15v321.335938c0 8.285156 6.714844 15 15 15h96.398438c8.285156 0 15-6.714844 15-15v-321.335938c0-8.28125-6.714844-15-15-15zm-15 321.335938h-66.398438v-291.335938h66.398438zm0 0" /><path d="m63.703125 0c-34.851563 0-63.203125 28.351562-63.203125 63.195312 0 34.851563 28.351562 63.199219 63.203125 63.199219 34.847656 0 63.195313-28.351562 63.195313-63.199219 0-34.84375-28.347657-63.195312-63.195313-63.195312zm0 96.394531c-18.308594 0-33.203125-14.890625-33.203125-33.199219 0-18.304687 14.894531-33.195312 33.203125-33.195312 18.304687 0 33.195313 14.890625 33.195313 33.195312 0 18.308594-14.890626 33.199219-33.195313 33.199219zm0 0" /><path d="m352.910156 158.542969c-22.800781 0-45.273437 5.496093-65.398437 15.777343-.683594-7.652343-7.109375-13.65625-14.941407-13.65625h-96.40625c-8.28125 0-15 6.71875-15 15v321.335938c0 8.285156 6.71875 15 15 15h96.40625c8.285157 0 15-6.714844 15-15v-176.734375c0-22.734375 18.5-41.230469 41.234376-41.230469 22.734374 0 41.226562 18.496094 41.226562 41.230469v176.734375c0 8.285156 6.71875 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-194.933594c0-79.140625-64.382813-143.523437-143.523438-143.523437zm113.523438 323.457031h-66.398438v-161.734375c0-39.277344-31.953125-71.230469-71.226562-71.230469-39.28125 0-71.238282 31.953125-71.238282 71.230469v161.734375h-66.402343v-291.335938h66.402343v11.082032c0 5.769531 3.308594 11.027344 8.511719 13.523437 5.199219 2.496094 11.371094 1.785157 15.875-1.820312 20.3125-16.292969 44.851563-24.90625 70.953125-24.90625 62.597656 0 113.523438 50.925781 113.523438 113.523437zm0 0" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}