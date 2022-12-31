import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-brand-50 py-6'>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className='flex items-center justify-between'>
                    <div className='shrink-0'>
                        <svg viewBox='0 0 85 64' width="85" height="64" fill="none">
                            <path fill="#0247FE" d="M24.05 14.64a9.066 9.066 0 0 1-.175-.913l-.14-.985a18.854 18.854 0 0 1-.141-2.46c0-.962.21-2.063.633-3.305a8.078 8.078 0 0 1 2.144-3.235C28.481 1.773 31.738.79 36.145.79l26.12 22.957c.235.844.352 1.969.352 3.375 0 1.383-.234 2.707-.703 3.973a8.093 8.093 0 0 1-2.25 3.234c-2.203 2.016-5.414 3.024-9.633 3.024L24.297 14.64h-.246Zm38.813-13.5c.703 1.079 1.055 2.555 1.055 4.43 0 3.47-1.3 6.059-3.902 7.77L45.918 1.14h16.945ZM23.031 37c-.703-1.078-1.054-2.555-1.054-4.43 0-3.445 1.289-6.023 3.867-7.734L39.977 37H23.03ZM7.236 51.223h-.215a2.623 2.623 0 0 0-.253-.508 2.108 2.108 0 0 0-.45-.528 2.238 2.238 0 0 0-.673-.42c-.26-.11-.57-.165-.928-.165-.32 0-.602.048-.85.146a1.742 1.742 0 0 0-.625.41 1.772 1.772 0 0 0-.37.625c-.086.241-.128.508-.128.801 0 .469.13.918.39 1.348.268.423.6.843.997 1.26.397.416.827.833 1.289 1.25.462.416.892.849 1.289 1.298.397.45.726.921.986 1.416.267.489.4 1.016.4 1.582 0 .423-.074.85-.224 1.28a3.236 3.236 0 0 1-.674 1.142 3.47 3.47 0 0 1-1.181.83c-.482.209-1.055.313-1.72.313-.37 0-.725-.036-1.064-.108a7.132 7.132 0 0 1-.927-.244 7.027 7.027 0 0 1-.762-.332 5.83 5.83 0 0 1-.547-.322l.225-2.158h.244c.071.306.189.599.351.879.163.273.362.517.596.732a3.1 3.1 0 0 0 .82.508 2.66 2.66 0 0 0 1.006.185c.332 0 .629-.048.889-.146.267-.104.495-.244.684-.42.188-.182.332-.397.43-.645.103-.247.155-.517.155-.81 0-.41-.074-.788-.224-1.133a4.341 4.341 0 0 0-.596-.996 7.645 7.645 0 0 0-.83-.908 41.67 41.67 0 0 0-.947-.88c-.326-.299-.645-.605-.957-.917a8.013 8.013 0 0 1-.83-.996 5.412 5.412 0 0 1-.586-1.143c-.15-.41-.225-.86-.225-1.347 0-.515.098-.977.293-1.387a3.42 3.42 0 0 1 .791-1.065 3.641 3.641 0 0 1 2.412-.908c.326 0 .625.026.899.078.273.052.517.114.732.186.221.072.414.143.576.215l.4.176-.068 1.826ZM16.66 59.7h-2.49c-.332 0-.648.002-.947.009-.3 0-.573.003-.82.01h-.577l-.361.761c-.156.313-.29.586-.4.82-.111.229-.202.43-.274.606a3.488 3.488 0 0 0-.156.46 1.381 1.381 0 0 0-.04.517.217.217 0 0 0 .03.078V63H8.906v-.04c.046-.045.117-.142.215-.292.098-.156.208-.345.332-.566.13-.222.267-.472.41-.752.15-.28.296-.57.44-.87l3.984-8.222h.732l3.907 8.222c.15.313.3.612.449.899.156.286.3.544.43.771.13.222.244.407.341.557.098.143.163.228.196.254V63h-2.5a.575.575 0 0 0 .02-.137v-.146c0-.143-.033-.316-.098-.518a5.055 5.055 0 0 0-.225-.615 7.617 7.617 0 0 0-.273-.615 41.786 41.786 0 0 1-.225-.489l-.38-.78Zm-4.453-.763H13.672c.312-.006.625-.01.937-.01h.909c.292-.006.556-.009.79-.009l-2.02-4.316-2.081 4.336ZM22.227 52.502v.039a.6.6 0 0 0-.03.156c-.006.072-.01.134-.01.186 0 .208.03.442.088.703.066.254.183.573.352.957l2.598 5.879 2.617-5.8c.058-.125.117-.255.176-.392.058-.143.113-.29.166-.439.052-.15.094-.3.127-.45.032-.156.048-.308.048-.458 0-.085-.006-.156-.02-.215a.416.416 0 0 0-.038-.127v-.039h1.846v.039c-.124.13-.284.361-.479.693a9.421 9.421 0 0 0-.605 1.25l-3.897 8.653h-.625l-3.594-8.155c-.13-.3-.27-.585-.42-.859-.143-.28-.28-.527-.41-.742a7.406 7.406 0 0 0-.332-.547 3.43 3.43 0 0 0-.205-.293v-.039h2.647ZM31.143 52.502h1.962l1.866-.02c.573-.013 1.064-.026 1.474-.039.417-.013.69-.032.82-.058l-.38 1.055a7.786 7.786 0 0 0-.596-.127 10.16 10.16 0 0 0-.713-.088 8.22 8.22 0 0 0-.957-.05c-.13 0-.28.007-.45.02-.168.007-.331.017-.487.03l-.557.039v3.857c.527-.006 1.003-.02 1.426-.039.423-.02.784-.046 1.084-.078a9.92 9.92 0 0 0 .928-.107l-.235 1.162c-.358-.046-.72-.085-1.084-.118a20.07 20.07 0 0 0-1.035-.078 15.74 15.74 0 0 0-1.084-.039v4.434c.605 0 1.162-.023 1.67-.069.508-.052.95-.107 1.328-.166.443-.071.843-.153 1.201-.244l-.224 1.28a68.745 68.745 0 0 0-.479-.03l-.684-.02c-.234 0-.455-.002-.664-.009h-4.13v-.04c.045-.136.084-.312.117-.526a6.97 6.97 0 0 0 .088-.791c.026-.32.045-.697.058-1.133.013-.436.02-.947.02-1.533v-2.461c0-.586-.007-1.094-.02-1.524a21.57 21.57 0 0 0-.058-1.123 6.998 6.998 0 0 0-.088-.8 3.252 3.252 0 0 0-.117-.528v-.039ZM45.459 51.223h-.215a2.618 2.618 0 0 0-.254-.508 2.106 2.106 0 0 0-.449-.528 2.238 2.238 0 0 0-.674-.42c-.26-.11-.57-.165-.927-.165-.32 0-.603.048-.85.146a1.742 1.742 0 0 0-.625.41 1.772 1.772 0 0 0-.371.625 2.562 2.562 0 0 0 .264 2.148c.266.424.598.844.995 1.26.398.417.827.834 1.29 1.25.462.417.892.85 1.289 1.3.397.449.726.92.986 1.415.267.489.4 1.016.4 1.582 0 .423-.075.85-.224 1.28a3.237 3.237 0 0 1-.674 1.142 3.47 3.47 0 0 1-1.182.83c-.481.209-1.054.313-1.718.313-.372 0-.726-.036-1.065-.108a7.132 7.132 0 0 1-.928-.244 7.035 7.035 0 0 1-.761-.332 5.832 5.832 0 0 1-.547-.322l.224-2.158h.245c.071.306.188.599.351.879.163.273.361.517.596.732a3.1 3.1 0 0 0 .82.508 2.66 2.66 0 0 0 1.006.185c.332 0 .628-.048.889-.146.267-.104.494-.244.683-.42.189-.182.332-.397.43-.645.104-.247.156-.517.156-.81 0-.41-.075-.788-.224-1.133a4.34 4.34 0 0 0-.596-.996 7.654 7.654 0 0 0-.83-.908 41.737 41.737 0 0 0-.947-.88c-.326-.299-.645-.605-.957-.917a8.013 8.013 0 0 1-.83-.996 5.415 5.415 0 0 1-.587-1.143c-.15-.41-.224-.86-.224-1.347 0-.515.098-.977.293-1.387a3.42 3.42 0 0 1 .79-1.065 3.64 3.64 0 0 1 2.412-.908c.326 0 .626.026.9.078.273.052.517.114.732.186.221.072.413.143.576.215l.4.176-.068 1.826ZM50.586 58.244l.38.059c.131.013.258.02.382.02.37 0 .71-.056 1.015-.167.313-.117.577-.29.791-.517.222-.228.39-.518.508-.87.124-.351.186-.761.186-1.23 0-.378-.043-.72-.127-1.025a2.189 2.189 0 0 0-.381-.782 1.606 1.606 0 0 0-.615-.507 1.897 1.897 0 0 0-.86-.186c-.208 0-.394.01-.556.03-.157.012-.29.029-.4.048a4.767 4.767 0 0 0-.323.078v5.05Zm0 .674c0 .586.006 1.1.02 1.543.012.443.029.827.048 1.152.026.32.056.59.088.81.033.222.072.401.117.538V63h-2.256v-.04c.046-.136.085-.312.118-.526.039-.215.068-.479.088-.791a22.4 22.4 0 0 0 .058-1.133c.013-.436.02-.947.02-1.533v-2.461c0-.586-.007-1.094-.02-1.524-.013-.436-.032-.81-.058-1.123a6.953 6.953 0 0 0-.088-.8 3.242 3.242 0 0 0-.117-.528v-.039l.43.02.39.019h.4c.209 0 .515-.02.918-.059.41-.039.892-.058 1.446-.058.507 0 .98.068 1.415.205.437.13.811.325 1.124.586.319.26.566.58.742.957.182.371.273.8.273 1.289 0 .573-.11 1.08-.332 1.523a3.244 3.244 0 0 1-.908 1.104 3.967 3.967 0 0 1-1.338.664 5.844 5.844 0 0 1-1.64.225c-.307 0-.62-.02-.938-.059ZM63.418 59.7h-2.49c-.332 0-.648.002-.947.009-.3 0-.573.003-.82.01h-.577l-.361.761c-.157.313-.29.586-.4.82-.111.229-.203.43-.274.606a3.488 3.488 0 0 0-.156.46 1.38 1.38 0 0 0-.04.517.217.217 0 0 0 .03.078V63h-1.719v-.04a2.13 2.13 0 0 0 .215-.292c.098-.156.208-.345.332-.566.13-.222.267-.472.41-.752.15-.28.296-.57.44-.87l3.984-8.222h.732l3.907 8.222c.15.313.3.612.449.899.156.286.3.544.43.771.13.222.244.407.341.557.098.143.163.228.196.254V63h-2.5a.575.575 0 0 0 .02-.137v-.146c0-.143-.033-.316-.099-.518a5.055 5.055 0 0 0-.224-.615 7.617 7.617 0 0 0-.274-.615 41.786 41.786 0 0 1-.224-.489l-.381-.78Zm-4.453-.763H60.43c.312-.006.625-.01.937-.01h.908c.293-.006.557-.009.791-.009l-2.021-4.316-2.08 4.336ZM77.11 60.822l-.762 1.817a5.217 5.217 0 0 1-.645.234 8.02 8.02 0 0 1-1.514.264c-.26.026-.507.039-.742.039a7.01 7.01 0 0 1-2.285-.361 5.147 5.147 0 0 1-1.806-1.055 4.905 4.905 0 0 1-1.192-1.719c-.286-.677-.43-1.452-.43-2.324 0-.768.15-1.481.45-2.139.3-.657.713-1.227 1.24-1.709a5.711 5.711 0 0 1 1.865-1.142 6.567 6.567 0 0 1 2.344-.41c.189 0 .387.01.596.029.214.013.426.036.634.068.209.033.41.072.606.117.195.04.377.082.547.127l.732 1.758-.117.068a3.483 3.483 0 0 0-.635-.595 3.714 3.714 0 0 0-.8-.46 4.647 4.647 0 0 0-.909-.302 4.44 4.44 0 0 0-.977-.108c-.54 0-1.035.095-1.484.284a3.134 3.134 0 0 0-1.142.83 3.85 3.85 0 0 0-.733 1.318c-.176.521-.263 1.11-.263 1.768 0 .742.084 1.435.253 2.08.17.638.424 1.194.762 1.67.339.468.762.84 1.27 1.113.508.267 1.1.4 1.777.4.326 0 .644-.039.957-.117a4.16 4.16 0 0 0 .899-.351c.286-.15.546-.33.78-.537.235-.215.437-.453.606-.713l.117.058ZM78.701 52.502h1.963l1.865-.02c.573-.013 1.065-.026 1.475-.039.417-.013.69-.032.82-.058l-.38 1.055a7.786 7.786 0 0 0-.596-.127 10.168 10.168 0 0 0-.713-.088 8.22 8.22 0 0 0-.957-.05c-.13 0-.28.007-.45.02-.169.007-.331.017-.488.03l-.556.039v3.857c.527-.006 1.002-.02 1.425-.039.424-.02.785-.046 1.084-.078a9.92 9.92 0 0 0 .928-.107l-.234 1.162a29.09 29.09 0 0 0-1.084-.118 20.07 20.07 0 0 0-1.035-.078c-.378-.026-.74-.039-1.084-.039v4.434c.605 0 1.162-.023 1.67-.069.507-.052.95-.107 1.328-.166.442-.071.843-.153 1.2-.244l-.224 1.28a69.144 69.144 0 0 0-.478-.03l-.684-.02c-.234 0-.456-.002-.664-.009h-4.13v-.04c.045-.136.084-.312.116-.526a6.95 6.95 0 0 0 .088-.791c.026-.32.046-.697.059-1.133.013-.436.02-.947.02-1.533v-2.461c0-.586-.007-1.094-.02-1.524-.013-.436-.033-.81-.059-1.123a6.978 6.978 0 0 0-.088-.8 3.263 3.263 0 0 0-.117-.528v-.039Z"/></svg>
                    </div>

                    <div className='flex ml-auto items-center justify-between'>
                        <nav className='flex items-center space-x-8'>
                            <Link href="/" className='inline-flex items-center p-2 text-brand-500 font-medium hover:text-blue-900 text-base leading-6'>Home</Link>
                            <Link href="/" className='inline-flex items-center p-2 text-slate-900 font-medium hover:text-slate-700'>Save</Link>
                            <Link href="/" className='inline-flex items-center p-2 text-slate-900 font-medium hover:text-slate-700'>Business</Link>
                            <Link href="/" className='inline-flex items-center p-2 text-slate-900 font-medium hover:text-slate-700'>Blog</Link>
                            <Link href="/" className='inline-flex items-center p-2 text-slate-900 font-medium hover:text-slate-700'>Contact Us</Link>

                        </nav>

                        <div className='ml-[120px] space-x-4'>
                            <Link href="/" className='py-4 px-6 inline-flex items-center border border-brand-500 bg-transparent text-[18px] font-bold text-brand-500 rounded-lg'>Log in</Link>
                            <Link href="/" className='inline-flex items-center py-4 px-6 bg-brand-500 text-white font-bold text-lg rounded-lg hover:bg-blue-700'>Create free account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;