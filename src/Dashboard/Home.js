import * as React from 'react'
import arr from '../assets/arrowright.svg'
import info from '../assets/info.svg'
import castle from '../assets/castle.svg'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import pin from '../assets/pin.svg'
import notes from '../assets/notes.svg'
import prints from '../assets/prints.svg'
import mic from '../assets/mic.svg'
import down from '../assets/round-icon.svg'
import dot from '../assets/dot.svg'
import arrupeft from '../assets/arrow-up-left.svg'
import arrright from '../assets/arrow-right.svg'
import arrup from '../assets/arrow-up.svg'
import menu from '../assets/menu.svg'
import dot2 from '../assets/dot-two.svg'

export default function Home() {
    return (
        <div className="m-8">
            <div className="flex items-center">
                <a href="" className="mr-2 tab-link">Divisions</a>
                <img className="mr-2" src={arr} />
                <p className="tab-link">Module</p>
            </div>
            <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 grid gap-4 my-8">
                <div className="card px-4 py-8 flex">
                    <div>
                        <p className="mb-2 card-num">31454</p>
                        <p className="card-sub">Ongoing metric</p>
                    </div>
                    <img className="ml-auto" src={info} />
                </div>
                <div className="card px-4 py-8 flex">
                    <div>
                        <p className="mb-2 card-num">2344</p>
                        <p className="card-sub">Past metric</p>
                    </div>
                    <img className="ml-auto" src={info} />
                </div>
                <div className="card px-4 py-8 flex">
                    <div>
                        <p className="mb-2 card-num">14224</p>
                        <p className="card-sub">Missed metric</p>
                    </div>
                    <img className="ml-auto" src={info} />
                </div>
                <div className="card px-4 py-8 flex">
                    <div>
                        <p className="mb-2 card-num">635</p>
                        <p className="card-sub">Failed metric</p>
                    </div>
                    <img className="ml-auto" src={info} />
                </div>
                <div className="card px-4 py-8 flex">
                    <div>
                        <p className="mb-2 card-num">11334</p>
                        <p className="card-sub">Pending metric</p>
                    </div>
                    <img className="ml-auto" src={info} />
                </div>
            </div>
            <div className="my-8">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sec--two">
                <div className="col-span-1">
                    <div className="p-4 bg-white card">
                        <div className="flex items-center">
                            <img className="mr-3" src={castle} />
                            <p className="text-black text-lg text-reduce font-semibold">Division Summary</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <img className="mr-3" src={phone} />
                            <p className="text-lg font-semibold text-reduce" style={{ color: '#0F1A4F' }}>0801 234 5678</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <img className="mr-3" src={mail} />
                            <p className="text-lg font-semibold text-reduce" style={{ color: '#0F1A4F' }}>asbfefr@gmail.com</p>
                        </div>
                        <div className="flex items-center mt-2 text-reduce">
                            <img className="mr-3" src={pin} />
                            <p className="text-lg font-semibold" style={{ color: '#0F1A4F' }}>Mojidi, Lagos</p>
                        </div>
                        <div className="flex items-center mt-2 text-reduce">
                            <img className="mr-3" src={notes} />
                            <p className="underline text-lg font-semibold" style={{ color: '#5771EE' }}>2 Journal entries</p>
                        </div>
                        <div className="flex items-center mt-2 text-reduce">
                            <img className="mr-3" src={prints} />
                            <p className="text-lg font-semibold" style={{ color: '#0F1A4F' }}>24 fingerprints enrolled</p>
                        </div>
                    </div>
                    <div className="p-4 mt-6">
                        <div className="flex items-center">
                            <img className="mr-3" src={mic} />
                            <p className="text-black text-lg font-semibold text-reduce">Module History</p>
                        </div>
                        <div className="relative mt-4">
                            <div class="time-line absolute h-full top-0 mt-1" style={{ left: '3.6px' }}></div>
                            <ul class="list-none m-0 p-0">
                                <li class="mb-6">
                                    <div class="flex mb-3">
                                        <div class="rounded-full ba-dot" style={{ width: '15px', height: '10px', background: '#707070', zIndex: '1' }}></div>
                                        <div class="ml-3" style={{ color: '#707070', fontWeight: '700', fontSize: '14px' }}>Searched “Journal Entries” on Division module</div>
                                    </div>
                                    <div class="flex items-center" style={{ marginLeft: '20px' }}>
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>22:10 15/09/2020</p>
                                        <img className="mx-2" src={dot2} />
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>Web</p>
                                    </div>
                                </li>
                                <li class="mb-6">
                                    <div class="flex mb-3">
                                        <div class="rounded-full ba-dot " style={{ width: '15px', height: '10px', background: '#707070', zIndex: '1' }}></div>
                                        <div class="ml-3" style={{ color: '#707070', fontWeight: '700', fontSize: '14px' }}>Searched “Fingerprint record” on Division module</div>
                                    </div>
                                    <div class="flex items-center" style={{ marginLeft: '20px' }}>
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>22:10 15/09/2020</p>
                                        <img className="mx-2" src={dot2} />
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>Web</p>
                                    </div>
                                </li>
                                <li class="mb-6">
                                    <div class="flex mb-3">
                                        <div class="rounded-full ba-dot" style={{ width: '15px', height: '10px', background: '#707070', zIndex: '1' }}></div>
                                        <div class="ml-3" style={{ color: '#707070', fontWeight: '700', fontSize: '14px' }}>Searched “Journal Entries” on Division module</div>
                                    </div>
                                    <div class="flex items-center" style={{ marginLeft: '20px' }}>
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>22:10 15/09/2020</p>
                                        <img className="mx-2" src={dot2} />
                                        <p className="text-reduce" style={{ color: '#A1AACE', fontWeight: '700' }}>Web</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ta-sec">
                    <table class="table-auto w-full">
                        <thead className="table-head">
                            <tr>
                                <th className="phone-check"><input className="check" type="checkbox" /></th>
                                <th></th>
                                <th>NAME</th>
                                <th>LOCATION</th>
                                <th>STATUS</th>
                                <th>ENTRIES</th>
                                <th>RISK PROFILE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Courtney Henry</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">775 Rolling Green Rd.</p>
                                </td>
                                <td>
                                    <span className="ta-ni">No Issues</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        19 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-lr">
                                        <img className="mr-2" src={arrupeft} />
                                        Low Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Darrell Steward</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">7529 E. Pecan St.</p>
                                </td>
                                <td>
                                    <span className="ta-ii">2 Issues found</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        10 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-mr">
                                        <img className="mr-2" src={arrright} />
                                        Mid Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Cody Fisher</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">3605 Parker Rd.</p>
                                </td>
                                <td>
                                    <span className="ta-ni">No Issues</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        8 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-mr">
                                        <img className="mr-2" src={arrright} />
                                        Mid Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Bessie Cooper</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">775 Rolling Green Rd.</p>
                                </td>
                                <td>
                                    <span className="ta-ii">1 Issue found</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        12 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-hr">
                                        <img className="mr-2" src={arrup} />
                                        High Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Annette Black</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">8080 Railroad St.</p>
                                </td>
                                <td>
                                    <span className="ta-ni">No Issues</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        13 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-lr">
                                        <img className="mr-2" src={arrupeft} />
                                        Low Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Jenny Wilson</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">8080 Railroad St.</p>
                                </td>
                                <td>
                                    <span className="ta-ii">5 Issues found</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        18 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-hr">
                                        <img className="mr-2" src={arrup} />
                                        High Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Darlene Robertson</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">3890 Poplar Dr.</p>
                                </td>
                                <td>
                                    <span className="ta-ii">2 Issues found</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        6 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-mr">
                                        <img className="mr-2" src={arrright} />
                                        Mid Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                            <tr>
                                <td><input className="check" type="checkbox" /></td>
                                <td><img src={down} /></td>
                                <td className="ta-name font-semibold">Ralph Edwards</td>
                                <td>
                                    <p className="ta-state font-semibold">Lagos state</p>
                                    <p className="ta-sub">8558 Green Rd.</p>
                                </td>
                                <td>
                                    <span className="ta-ni">No Issues</span>
                                </td>
                                <td>
                                    <p className="ta-entries flex items-center">
                                        <img className="mr-2" src={dot} />
                                        14 Unique Entries
                                    </p>
                                    <p className="ta-sub">Homogenous</p>
                                </td>
                                <td>
                                    <p className="flex items-center ta-lr">
                                        <img className="mr-2" src={arrupeft} />
                                        Low Risk
                                    </p>
                                </td>
                                <td>
                                    <img src={menu} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}