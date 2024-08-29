import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo_cookkit.png"
const HeaderTop = () => {
    return (
        <div className="container flex justify-between pt-2 align-middle px-12">
            <div className="social flex mt-2">
                <Link className="group">
                    <div className="group-hover:animate-trans-right">
                        <svg
                            className='group-hover:fill-lime-500 transition-colors-.5s '
                            enableBackground="new 0 0 64 64"
                            fill='#3F4C5C'
                            height="45px"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 64 64"
                            width="45px"
                        >
                            <path d="M32,7.174C18.311,7.174,7.174,18.311,7.174,32c0,13.689,11.137,24.826,24.826,24.826c13.689,0,24.826-11.137,24.826-24.826 C56.826,18.311,45.689,7.174,32,7.174z M38.174,32.874h-4.039c0,6.453,0,14.398,0,14.398h-5.985c0,0,0-7.868,0-14.398h-2.845v-5.088 h2.845v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.433,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.268,0.262-1.268,1.386v2.99h4.56 L38.174,32.874z" />
                        </svg>
                    </div>
                </Link>
                <Link className="group">
                    <div className="group-hover:animate-trans-right">
                        <svg
                            className='group-hover:fill-lime-500 transition-colors-.5s pt-[1px] '
                            height="42px" id="Layer_1" fill='#3F4C5C'
                            style={{ enableBackground: "new 0 0 56.7 56.7" }} version="1.1" viewBox="0 0 56.7 56.7" width="42px" ><g><circle cx="28.1" cy="30" r="4.4" /><path d="M33.6,19.2h-11c-1.6,0-3,0.5-3.9,1.4c-0.9,0.9-1.4,2.3-1.4,3.9v11c0,1.6,0.5,3,1.5,4c1,0.9,2.3,1.4,3.9,1.4h10.9   c1.6,0,3-0.5,3.9-1.4c1-0.9,1.5-2.3,1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6,19.7,35.3,19.2,33.6,19.2z M28.1,36.8   c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8S35,26.2,35,30C35,33.8,31.9,36.8,28.1,36.8z M35.2,24.5c-0.9,0-1.6-0.7-1.6-1.6   s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S36.1,24.5,35.2,24.5z" /><path d="M28.3,5.2c-13.6,0-24.6,11-24.6,24.6c0,13.6,11,24.6,24.6,24.6c13.6,0,24.6-11,24.6-24.6C53,16.2,41.9,5.2,28.3,5.2z    M41.4,35.6c0,2.3-0.8,4.3-2.2,5.7c-1.4,1.4-3.4,2.1-5.6,2.1H22.7c-2.2,0-4.2-0.7-5.6-2.1c-1.5-1.4-2.2-3.4-2.2-5.7v-11   c0-4.6,3.1-7.8,7.8-7.8h11c2.3,0,4.2,0.8,5.6,2.2c1.4,1.4,2.1,3.3,2.1,5.6V35.6z" /></g></svg>
                    </div>
                </Link>
                <Link className="group">
                    <div className="group-hover:animate-trans-right">
                        <svg
                            className='group-hover:fill-lime-500 transition-colors-.5s ' fill='#3F4C5C'
                            enable-background="new 0 0 56.693 56.693" height="42px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="42px" ><path d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z" /></svg>
                    </div>
                </Link>
                <Link className="group">
                    <div className="group-hover:animate-trans-right">
                        <svg className='group-hover:fill-lime-500 transition-colors-.5s p-[2px] ' fill='#3F4C5C'
                            enable-background="new 0 0 512 512" height="42px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="42px" ><g><path d="M437.013,74.963C390.661,28.765,326.734,0,255.998,0C185.261,0,121.335,28.765,74.983,74.963   C28.636,121.305,0,185.355,0,256.073c0,70.566,28.636,134.625,74.983,180.959C121.335,483.232,185.261,512,255.998,512   c70.736,0,134.663-28.768,181.015-74.968C483.359,390.698,512,326.64,512,256.073C512,185.355,483.359,121.305,437.013,74.963z" /><path clip-rule="evenodd" d="M384.138,201.512c0,0-2.686-18.847-10.491-27.066   c-9.915-10.769-21.118-10.912-26.076-11.624c-36.572-2.69-91.426-2.69-91.426-2.69h-0.293c0,0-54.708,0-91.29,2.69   c-5.235,0.712-16.292,0.855-26.213,11.624c-7.8,8.22-10.486,27.066-10.486,27.066s-2.701,22.107-2.701,43.929v2.837v17.994   c0,22.107,2.701,43.935,2.701,43.935s2.687,18.847,10.486,27.207c9.921,10.91,22.967,10.488,28.919,11.619   c20.836,2.127,88.877,2.837,88.877,2.837s54.854-0.283,91.426-2.837c4.958-0.709,16.161-0.709,26.076-11.619   c7.806-8.36,10.491-27.207,10.491-27.207s2.55-21.827,2.55-43.935v-16.861v-3.97C386.688,223.619,384.138,201.512,384.138,201.512   L384.138,201.512z M299.659,253.098l-70.737,38.115v-58.668V214.69l32.039,17.433L299.659,253.098z" fill="#FFFFFF" fill-rule="evenodd" /></g></svg>
                    </div>
                </Link>
            </div>
            <div className="logo">
                <Link>
                    <img className='h-[60px]' src={Logo} alt="" />
                </Link>
            </div>
            <div className="mail">
            <Link to="/newsletter" className="flex group items-center bg-[#FFDF34] text-white mt-2 py-2 px-4 rounded hover:bg-lime-500 hover:text-white transition-colors-1s">
            <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-black group-hover:text-white transition-colors-1s"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25V17.5a2.75 2.75 0 01-2.75 2.75H5.75A2.75 2.75 0 013 17.5V8.25M21 8.25l-9 5.25L3 8.25m18 0V6.5a2.75 2.75 0 00-2.75-2.75H5.75A2.75 2.75 0 003 6.5v1.75"
                />
            </svg>
            <span className='text-black transition-colors-1s  group-hover:text-white'>Newsletter</span>
        </Link>
            </div>
        </div>
    );
}

export default HeaderTop;
