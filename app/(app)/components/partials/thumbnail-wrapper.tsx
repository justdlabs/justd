"use client"

import React from "react"

const thumbnailMap: { [key: string]: React.ReactNode } = {
  button: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 200">
      <rect width="93.237" height="27.971" x="152.763" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="177.937" y="98.121" fill="#fff" rx="1.865" />
      <rect width="92.237" height="26.971" x="53.5" y="86.5" fill="#fff" rx="5.094" />
      <rect width="92.237" height="26.971" x="53.5" y="86.5" stroke="#D4D4D8" rx="5.094" />
      <rect width="42.889" height="3.729" x="78.174" y="98.121" fill="#52525B" rx="1.865" />
    </svg>
  ),
  "file-trigger": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 200">
      <rect width="93.237" height="27.971" x="124" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="149.174" y="98.121" fill="#fff" rx="1.865" />
      <rect width="26.97" height="26.971" x="83.5" y="86.5" fill="#fff" rx="13.485" />
      <rect width="26.97" height="26.971" x="83.5" y="86.5" stroke="#D4D4D8" rx="13.485" />
      <rect width="3.73" height="3.729" x="95" y="98" fill="#3F3F46" rx="1.865" />
    </svg>
  ),
  "toggle-group": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 200">
      <rect width="93.237" height="27.971" x="152.763" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="177.937" y="98.121" fill="#fff" rx="1.865" />
      <rect width="92.237" height="26.971" x="53.5" y="86.5" fill="#fff" rx="5.094" />
      <rect width="92.237" height="26.971" x="53.5" y="86.5" stroke="#D4D4D8" rx="5.094" />
      <rect width="42.889" height="3.729" x="78.174" y="98.121" fill="#52525B" rx="1.865" />
    </svg>
  ),
  toggle: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93.237" height="27.971" x="103" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="137" y="98" fill="#fff" rx="1.865" />
      <path
        fill="#A1A1AA"
        d="m123.134 104.29-1.946-1.947-2.048 2.047a.377.377 0 0 1-.631-.268.38.38 0 0 1 .101-.262l2.047-2.047-1.946-1.947a.87.87 0 0 1-.228-.838.88.88 0 0 1 .606-.622l3.362-.96a.13.13 0 0 0 .075-.059l1.074-1.88a.86.86 0 0 1 .643-.433.88.88 0 0 1 .735.249l2.7 2.699a.876.876 0 0 1-.185 1.378l-1.88 1.075a.12.12 0 0 0-.058.074l-.96 3.362a.873.873 0 0 1-1.072.604.9.9 0 0 1-.389-.225"
      />
    </svg>
  ),
  menu: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="28" height="28" x="21" y="20" fill="#71717A" rx="14" />
      <rect width="4" height="4" x="33" y="32" fill="#fff" rx="2" />
      <path stroke="#A1A1AA" d="m57 32 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <rect width="84" height="104" x="21" y="59" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="56" height="4" x="28" y="88" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="28" y="100" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="33" height="4" x="26" y="65" fill="#fff" rx="1.5" />
      <rect width="58" height="3" x="26" y="72" fill="#000" fillOpacity=".2" rx="1.5" />
      <rect width="45" height="4" x="28" y="124" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="66" height="4" x="28" y="148" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="59" height="4" x="28" y="136" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="78" height="12" x="24" y="108" fill="#000" fillOpacity=".5" rx="3" />
      <path
        stroke="#fff"
        d="M96.167 115.667 97.833 114l-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity=".5"
        strokeWidth=".625"
      />
      <rect width="49" height="4" x="28" y="112" fill="#fff" rx="1.5" />
      <rect width="84" height="54" x="108" y="108" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="56" height="4" x="115" y="116" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="115" y="128" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="45" height="4" x="115" y="152" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="78" height="12" x="111" y="136" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="49" height="4" x="115" y="140" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="m182.167 143.667 1.666-1.667-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity=".5"
        strokeWidth=".625"
      />
      <rect width="84" height="44" x="195" y="136" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="56" height="4" x="202" y="144" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="202" y="156" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="45" height="4" x="202" y="168" fill="#fff" fillOpacity=".7" rx="1.5" />
      <path stroke="#18181B" d="M21 80.85h84" strokeOpacity=".5" strokeWidth=".3" />
    </svg>
  ),
  "list-box": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93" height="80" x="104" y="60" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="62" height="4" x="111.75" y="68" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="62" height="4" x="112" y="104" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="67" height="4" x="112" y="80" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="112" y="116" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="49.821" height="4" x="112" y="128" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="87" height="12" x="107" y="88" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="49" height="4" x="111" y="92" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="M189.667 92 186 95.667 184.333 94"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".667"
      />
    </svg>
  ),
  "tag-group": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="37.382" height="15" x="90" y="99.486" fill="#71717A" rx="2" />
      <rect width="23" height="2" x="97.382" y="106" fill="#fff" rx="1" />
      <rect width="37.382" height="15" x="131.382" y="99" fill="#71717A" rx="2" />
      <rect width="23" height="2" x="138.763" y="105.514" fill="#fff" rx="1" />
      <rect width="37.382" height="15" x="172.763" y="99" fill="#71717A" rx="2" />
      <rect width="23" height="2" x="180.145" y="105.514" fill="#fff" rx="1" />
      <rect width="58" height="4" x="90.382" y="86" fill="currentColor" rx="2" />
    </svg>
  ),
  table: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <g fill="currentColor">
        <rect width="33" height="4" x="47" y="55" rx="2" />
        <rect width="42" height="4" x="108" y="55" rx="2" />
        <rect width="42" height="4" x="160" y="55" rx="2" />
        <rect width="42" height="4" x="212" y="55" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="51" height="4" x="47" y="69" rx="2" />
        <rect width="35" height="4" x="108" y="69" rx="2" />
        <rect width="33" height="4" x="160" y="69" rx="2" />
        <rect width="42" height="4" x="212" y="69" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="42" height="4" x="47" y="113" rx="2" />
        <rect width="35" height="4" x="108" y="113" rx="2" />
        <rect width="21" height="4" x="160" y="113" rx="2" />
        <rect width="30" height="4" x="212" y="113" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="33" height="4" x="47" y="83" rx="2" />
        <rect width="18" height="4" x="108" y="83" rx="2" />
        <rect width="27" height="4" x="160" y="83" rx="2" />
        <rect width="34" height="4" x="212" y="83" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="42" height="4" x="47" y="127" rx="2" />
        <rect width="42" height="4" x="108" y="127" rx="2" />
        <rect width="42" height="4" x="160" y="127" rx="2" />
        <rect width="30" height="4" x="212" y="127" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="51" height="4" x="47" y="98" rx="2" />
        <rect width="42" height="4" x="108" y="98" rx="2" />
        <rect width="42" height="4" x="160" y="98" rx="2" />
        <rect width="42" height="4" x="212" y="98" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="54" height="4" x="47" y="142" rx="2" />
        <rect width="26" height="4" x="108" y="142" rx="2" />
        <rect width="36" height="4" x="160" y="142" rx="2" />
        <rect width="42" height="4" x="212" y="142" rx="2" />
      </g>
      <g fill="#878796" fillOpacity=".5">
        <rect width="54" height="4" x="47" y="155" rx="2" />
        <rect width="26" height="4" x="108" y="155" rx="2" />
        <rect width="36" height="4" x="160" y="155" rx="2" />
        <rect width="42" height="4" x="212" y="155" rx="2" />
      </g>
    </svg>
  ),
  tree: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        stroke="#A1A1AA"
        d="M112.167 49.667 113.833 48l-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <path
        fill="currentColor"
        d="M122 44.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#a)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M138 59.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#b)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M124 102.667a3.333 3.333 0 1 0 0 6.665 3.333 3.333 0 0 0 0-6.665m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.24.24 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.25.25 0 0 0 .181-.091z"
        clipPath="url(#c)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="#8C8C8D"
        d="M124 89.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#d)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="#8C8C8D"
        d="M151 73.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#e)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        stroke="#A1A1AA"
        d="M112.167 94.667 113.833 93l-1.666-1.667m-.834 13.834 1.667 1.666 1.667-1.666m9.666-43L126 63.833l1.667-1.666m10.5 16.5L139.833 77l-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <rect width="33" height="4" x="129" y="46" fill="currentColor" rx="2" />
      <rect width="33" height="4" x="145" y="61" fill="currentColor" rx="2" />
      <rect width="33" height="4" x="131" y="91" fill="#8C8C8D" rx="2" />
      <rect width="33" height="4" x="131" y="104" fill="currentColor" rx="2" />
      <path
        fill="#8C8C8D"
        d="M137 115.667a3.333 3.333 0 1 0 0 6.665 3.333 3.333 0 0 0 0-6.665m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.24.24 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.25.25 0 0 0 .181-.091z"
        clipPath="url(#f)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        stroke="#A1A1AA"
        d="m125.167 120.667 1.666-1.667-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <rect width="33" height="4" x="145" y="117" fill="currentColor" fillOpacity=".5" rx="2" />
      <path
        fill="#8C8C8D"
        d="M137 132.667a3.333 3.333 0 1 0 0 6.665 3.333 3.333 0 0 0 0-6.665m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.24.24 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.25.25 0 0 0 .181-.091z"
        clipPath="url(#g)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        stroke="#A1A1AA"
        d="m125.167 137.667 1.666-1.667-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <rect width="33" height="4" x="145" y="134" fill="currentColor" fillOpacity=".5" rx="2" />
      <path
        fill="#8C8C8D"
        d="M137 149.667a3.333 3.333 0 1 0 0 6.665 3.333 3.333 0 0 0 0-6.665m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.24.24 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.25.25 0 0 0 .181-.091z"
        clipPath="url(#h)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        stroke="#A1A1AA"
        d="m125.167 154.667 1.666-1.667-1.666-1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <rect width="33" height="4" x="145" y="151" fill="currentColor" fillOpacity=".5" rx="2" />
      <rect width="33" height="4" x="159" y="75" fill="currentColor" fillOpacity=".5" rx="2" />
    </svg>
  ),
  "grid-list": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        fill="currentColor"
        d="M122 74.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#a)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M122 89.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.42.178.24.24 0 0 0 .067.175l.666.667a.25.25 0 0 0 .289.046.24.24 0 0 0 .081-.065z"
        clipPath="url(#b)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M122 104.667a3.333 3.333 0 1 0 0 6.665 3.333 3.333 0 0 0 0-6.665m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.24.24 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.25.25 0 0 0 .181-.091z"
        clipPath="url(#c)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <rect width="39" height="4" x="130" y="61" fill="#71717A" rx="2" />
      <rect width="51" height="4" x="130" y="76" fill="currentColor" rx="2" />
      <rect width="45" height="4" x="130" y="91" fill="currentColor" rx="2" />
      <rect width="65" height="4" x="130" y="106" fill="currentColor" rx="2" />
      <rect width="35" height="4" x="130" y="121" fill="#71717A" rx="2" />
      <rect width="51" height="4" x="130" y="136" fill="#71717A" rx="2" />
      <path
        stroke="#A1A1AA"
        d="M106.917 63h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166M106.917 78h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166M106.917 93h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166M106.917 108h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166M106.917 123h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166M106.917 138h6.166m-6.166-2.083h6.166m-6.166 4.166h6.166"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
      />
      <path
        stroke="currentColor"
        d="M122 66.083a3.083 3.083 0 1 0 0-6.166 3.083 3.083 0 0 0 0 6.166Z"
        clipPath="url(#d)"
        strokeLinecap="square"
        strokeWidth=".5"
      />
      <path
        stroke="currentColor"
        d="M122 126.083a3.083 3.083 0 1 0 0-6.165 3.083 3.083 0 0 0 0 6.165Z"
        clipPath="url(#e)"
        strokeLinecap="square"
        strokeWidth=".5"
      />
      <path
        stroke="currentColor"
        d="M122 141.083a3.083 3.083 0 1 0 0-6.165 3.083 3.083 0 0 0 0 6.165Z"
        clipPath="url(#f)"
        strokeLinecap="square"
        strokeWidth=".5"
      />
    </svg>
  ),
  choicebox: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="119" height="30" x="27" y="45" fill="#71717A" rx="3.729" />
      <rect width="60" height="4" x="39" y="54" fill="#fff" rx="2" />
      <rect width="80" height="4" x="39" y="63" fill="#fff" fillOpacity=".5" rx="2" />
      <rect width="119" height="30" x="155" y="45" fill="#71717A" rx="3.729" />
      <rect width="31" height="4" x="167" y="54" fill="#fff" rx="2" />
      <rect width="60" height="4" x="167" y="63" fill="#fff" fillOpacity=".5" rx="2" />
      <path
        fill="#fff"
        d="M262 56.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.353.353l.666.667a.25.25 0 0 0 .29.046.3.3 0 0 0 .08-.065z"
        clipPath="url(#a)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <rect width="119" height="30" x="27" y="85" fill="#71717A" rx="3.729" />
      <rect width="45" height="4" x="39" y="94" fill="#fff" rx="2" />
      <rect width="80" height="4" x="39" y="103" fill="#fff" fillOpacity=".5" rx="2" />
      <path
        fill="#fff"
        d="M135 97.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.029l-1.326 1.62-.471-.471a.24.24 0 0 0-.175-.067.247.247 0 0 0-.245.245.25.25 0 0 0 .067.175l.666.667a.3.3 0 0 0 .087.056.24.24 0 0 0 .102.016.24.24 0 0 0 .181-.091z"
        clipPath="url(#b)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <rect width="119" height="30" x="27" y="125" fill="#71717A" fillOpacity=".5" rx="3.729" />
      <rect width="34" height="4" x="39" y="134" fill="#fff" rx="2" />
      <rect width="92" height="4" x="39" y="143" fill="#fff" fillOpacity=".5" rx="2" />
      <rect width="119" height="30" x="155" y="125" fill="#71717A" fillOpacity=".5" rx="3.729" />
      <rect width="33" height="4" x="167" y="134" fill="#fff" rx="2" />
      <rect width="80" height="4" x="167" y="143" fill="#fff" fillOpacity=".5" rx="2" />
      <rect width="119" height="30" x="155" y="85" fill="#71717A" fillOpacity=".5" rx="3.729" />
      <rect width="67" height="4" x="167" y="94" fill="#fff" rx="2" />
      <rect width="88" height="4" x="167" y="103" fill="#fff" fillOpacity=".5" rx="2" />
      <path
        fill="#fff"
        d="M134 56.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m1.193 2.658a.25.25 0 0 0-.039-.346.25.25 0 0 0-.347.03l-1.326 1.619-.471-.471a.25.25 0 0 0-.353.353l.666.667a.25.25 0 0 0 .29.046.3.3 0 0 0 .08-.065z"
        clipPath="url(#c)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  ),
  dropdown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93" height="80" x="100" y="76" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="62" height="4" x="107.75" y="84" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="62" height="4" x="108" y="120" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="67" height="4" x="108" y="96" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="108" y="132" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="49.821" height="4" x="108" y="144" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="87" height="12" x="103" y="104" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="49" height="4" x="107" y="108" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="M185.667 108 182 111.667 180.333 110"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".667"
      />
      <rect width="62" height="4" x="102" y="63" fill="currentColor" rx="2" />
      <path stroke="#A1A1AA" d="M184.333 63.667 187 66.333l2.667-2.666" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "color-picker": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        fill="#91919C"
        d="M107.134 63.5a1 1 0 0 1 1.732 0l6.062 10.5a1 1 0 0 1-.866 1.5h-12.124a1 1 0 0 1-.866-1.5z"
      />
      <rect width="100" height="92" x="101" y="66" fill="#91919C" rx="5" />
      <rect width="96" height="59" x="103" y="68" fill="#E4E4E7" rx="3" />
      <rect width="96" height="12" x="103" y="129" fill="#E4E4E7" rx="3" />
      <rect width="58" height="13" x="103" y="143" fill="#E4E4E7" rx="3" />
      <rect width="47" height="3" x="109" y="148" fill="#71717A" rx="1.5" />
      <rect width="36" height="13" x="163" y="143" fill="#E4E4E7" rx="3" />
      <path
        stroke="#A1A1AA"
        d="m190.333 149.167 1.667 1.666 1.667-1.666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
      <rect width="16" height="3" x="169" y="148" fill="#71717A" rx="1.5" />
      <rect width="11" height="11" x="165.5" y="86.5" stroke="#000" rx="5.5" />
      <rect width="9.167" height="9.167" x="166.417" y="87.417" stroke="#fff" rx="4.583" strokeWidth=".833" />
      <rect width="6.5" height="6.5" x="118.25" y="131.25" stroke="#000" rx="3.25" strokeWidth=".5" />
      <rect width="17" height="17" x="101" y="43" fill="#E4E4E7" rx="2.125" />
    </svg>
  ),
  "color-field": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="79.5" height="27.5" x="110.25" y="86.25" stroke="#71717A" rx="5.344" strokeWidth=".5" />
      <rect width="43" height="4" x="139" y="98" fill="#71717A" rx="2" />
      <rect width="17.5" height="17.5" x="116.25" y="91.25" fill="#3F3F46" fillOpacity=".5" rx="3.75" />
      <rect width="17.5" height="17.5" x="116.25" y="91.25" stroke="#71717A" rx="3.75" strokeWidth=".5" />
    </svg>
  ),
  "color-area": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <g fill="#A1A1AA">
        <rect width="96" height="97" x="102" y="52" rx="6" />
        <rect width="11" height="11" x="181.5" y="64.5" stroke="#000" rx="5.5" />
        <rect width="9.167" height="9.167" x="182.417" y="65.417" stroke="#fff" rx="4.583" strokeWidth=".833" />
      </g>
    </svg>
  ),
  "color-slider": null,
  "color-swatch-picker": null,
  "color-swatch": null,
  "color-wheel": null,
  "color-thumb": null,

  form: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        stroke="#71717A"
        d="M217.381 76.961H80.631A4.63 4.63 0 0 0 76 81.592v14.569a4.63 4.63 0 0 0 4.63 4.63h136.751a4.63 4.63 0 0 0 4.631-4.63V81.592a4.63 4.63 0 0 0-4.631-4.63Z"
        strokeWidth=".433"
      />
      <path
        fill="#71717A"
        d="M123.443 87.143H90.515a1.733 1.733 0 0 0 0 3.466h32.928a1.733 1.733 0 0 0 0-3.466m23.397 0h-13.865a1.733 1.733 0 0 0 0 3.466h13.865a1.733 1.733 0 0 0 0-3.466m33.795 0h-24.263a1.732 1.732 0 1 0 0 3.466h24.263a1.733 1.733 0 0 0 0-3.466"
      />
      <path
        stroke="#71717A"
        d="M217.381 41H80.631A4.63 4.63 0 0 0 76 45.63V60.2a4.63 4.63 0 0 0 4.63 4.63h136.751a4.63 4.63 0 0 0 4.631-4.63V45.63a4.63 4.63 0 0 0-4.631-4.63Z"
        strokeWidth=".433"
      />
      <path
        fill="#71717A"
        d="M123.443 51.182H90.515a1.733 1.733 0 0 0 0 3.466h32.928a1.733 1.733 0 0 0 0-3.466m23.397 0h-13.865a1.733 1.733 0 0 0 0 3.466h13.865a1.733 1.733 0 0 0 0-3.466m33.795 0h-24.263a1.732 1.732 0 1 0 0 3.466h24.263a1.733 1.733 0 0 0 0-3.466"
      />
      <rect width="51.214" height="19.768" x="172.36" y="139.345" fill="#fff" rx="4.34" />
      <rect width="51.214" height="19.768" x="172.36" y="139.345" stroke="#D4D4D8" rx="4.34" strokeWidth=".852" />
      <rect width="36.539" height="3.177" x="179.985" y="147.584" fill="#52525B" rx="1.589" />
      <rect width="52.066" height="20.62" x="114.128" y="139.096" fill="#71717A" rx="3.177" />
      <rect width="36.539" height="3.177" x="121.927" y="147.584" fill="#fff" rx="1.589" />
      <path
        fill="#71717A"
        d="M130.592 115.522H97.663a1.733 1.733 0 0 0 0 3.467h32.929a1.733 1.733 0 0 0 0-3.467m41.594 0h-32.929a1.733 1.733 0 0 0 0 3.467h32.929a1.733 1.733 0 0 0 0-3.467m-41.594 8.666H97.663a1.733 1.733 0 1 0 0 3.466h32.929a1.733 1.733 0 0 0 0-3.466m60.575 0h-50.96c-1.482 0-2.683.776-2.683 1.733s1.201 1.733 2.683 1.733h50.96c1.482 0 2.683-.776 2.683-1.733s-1.201-1.733-2.683-1.733"
      />
      <path
        fill="#71717A"
        d="M82.932 115.811a5.777 5.777 0 1 0 .001 11.554 5.777 5.777 0 0 0 0-11.554m2.069 4.608a.435.435 0 0 0-.38-.697.44.44 0 0 0-.29.148l-2.298 2.807-.816-.817a.43.43 0 0 0-.602.01.436.436 0 0 0-.01.602l1.155 1.156a.43.43 0 0 0 .5.08.4.4 0 0 0 .14-.112z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  ),
  field: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        stroke="#71717A"
        d="M218.381 74H81.631A4.63 4.63 0 0 0 77 78.63V93.2a4.63 4.63 0 0 0 4.63 4.63h136.751a4.63 4.63 0 0 0 4.631-4.63V78.63a4.63 4.63 0 0 0-4.631-4.63Z"
        strokeWidth=".433"
      />
      <path
        fill="#71717A"
        d="M124.443 84.182H91.515a1.733 1.733 0 1 0 0 3.466h32.928a1.733 1.733 0 0 0 0-3.466m23.397 0h-13.865a1.733 1.733 0 0 0 0 3.466h13.865a1.733 1.733 0 0 0 0-3.466m33.795 0h-24.263a1.732 1.732 0 1 0 0 3.466h24.263a1.733 1.733 0 0 0 0-3.466m-50.043 28.514H98.663a1.733 1.733 0 0 0 0 3.466h32.929a1.733 1.733 0 1 0 0-3.466m41.594 0h-32.929a1.733 1.733 0 0 0 0 3.466h32.929a1.733 1.733 0 1 0 0-3.466m-41.594 8.666H98.663a1.733 1.733 0 0 0 0 3.466h32.929a1.733 1.733 0 0 0 0-3.466m60.575 0h-50.96c-1.482 0-2.683.776-2.683 1.733s1.201 1.733 2.683 1.733h50.96c1.482 0 2.683-.776 2.683-1.733s-1.201-1.733-2.683-1.733"
      />
      <path
        fill="#71717A"
        d="M83.932 112.985a5.777 5.777 0 1 0 .001 11.554 5.777 5.777 0 0 0 0-11.554m2.069 4.607a.43.43 0 0 0-.069-.6.433.433 0 0 0-.602.052l-2.297 2.807-.816-.817a.432.432 0 0 0-.729.309.43.43 0 0 0 .116.303l1.156 1.155a.434.434 0 0 0 .64-.031z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  ),
  "text-field": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="168.5" height="27.5" x="66.25" y="86.25" stroke="#71717A" rx="5.344" strokeWidth=".5" />
      <rect width="42" height="4" x="81" y="98" fill="#71717A" rx="2" />
      <rect width="20" height="4" x="130" y="98" fill="#71717A" rx="2" />
      <rect width="32" height="4" x="157" y="98" fill="#71717A" rx="2" />
    </svg>
  ),
  "search-field": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <path
        stroke="#71717A"
        d="M229.156 86H71.344A5.344 5.344 0 0 0 66 91.344v16.812a5.344 5.344 0 0 0 5.344 5.344h157.812a5.345 5.345 0 0 0 5.344-5.344V91.344A5.344 5.344 0 0 0 229.156 86Z"
        strokeWidth=".5"
      />
      <path fill="#71717A" d="M137 98H99a2 2 0 1 0 0 4h38a2 2 0 1 0 0-4m27 0h-16a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4" />
      <g fill="#A1A1AA">
        <path d="M81.417 102.333a2.916 2.916 0 1 0 0-5.833 2.916 2.916 0 0 0 0 5.833" />
        <path
          d="M81.417 95.625a3.791 3.791 0 1 0 0 7.583 3.791 3.791 0 0 0 0-7.583m-4.667 3.792a4.667 4.667 0 1 1 8.261 2.976l2.11 2.11a.44.44 0 0 1 .14.313.43.43 0 0 1-.274.413.44.44 0 0 1-.484-.107l-2.11-2.111a4.66 4.66 0 0 1-4.962.629 4.67 4.67 0 0 1-2.681-4.223"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
      <path stroke="#A1A1AA" d="m216.5 96.5 7 7m0-7-7 7" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  ),
  textarea: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="167.725" height="42.948" x="66.226" y="78.226" stroke="#575760" rx="5.199" strokeWidth=".452" />
      <rect width="31.646" height="4.521" x="75.042" y="87.946" fill="#6E6E78" rx="2.26" />
      <rect width="31.646" height="4.521" x="112.113" y="87.946" fill="#6E6E78" rx="2.26" />
      <rect width="31.646" height="4.521" x="160.939" y="97.892" fill="#6E6E78" rx="2.26" />
      <rect width="22.604" height="4.521" x="198.01" y="97.892" fill="#6E6E78" rx="2.26" />
      <rect width="48.826" height="4.521" x="149.184" y="87.946" fill="#6E6E78" rx="2.26" />
      <rect width="20.796" height="4.521" x="203.435" y="87.946" fill="#6E6E78" rx="2.26" />
      <rect width="80.472" height="4.521" x="75.042" y="97.892" fill="#6E6E78" rx="2.26" />
      <rect width="49.73" height="4.521" x="75.042" y="107.838" fill="#6E6E78" rx="2.26" />
      <rect width="37.071" height="4.521" x="130.197" y="107.838" fill="#6E6E78" rx="2.26" />
      <rect width="47.921" height="4.521" x="172.693" y="107.838" fill="#6E6E78" rx="2.26" />
    </svg>
  ),
  "input-otp": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="25.735" height="27.1" x="54.2" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="65.404" y="94" fill="#71717A" rx="1.426" />
      <rect width="25.735" height="27.1" x="85.562" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="96.767" y="94" fill="#71717A" rx="1.426" />
      <rect width="25.735" height="27.1" x="115.974" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="127.179" y="94" fill="#71717A" rx="1.426" />
      <rect width="25.735" height="27.1" x="158.741" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="169.945" y="94" fill="#71717A" rx="1.426" />
      <rect width="6.653" height="3" x="147.137" y="98" fill="#71717A" rx="1.5" />
      <rect width="25.735" height="27.1" x="189.153" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="200.357" y="94" fill="#71717A" rx="1.426" />
      <rect width="25.735" height="27.1" x="219.565" y="86.2" stroke="#71717A" rx="3.8" strokeWidth=".4" />
      <rect width="2.851" height="12" x="230.769" y="94" fill="#71717A" rx="1.426" />
    </svg>
  ),
  "number-field": null,
  "checkbox-group": null,
  checkbox: null,
  "radio-group": null,
  "tag-field": null,
  "combo-box": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93" height="80" x="100" y="74" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="62" height="4" x="107.75" y="82" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="62" height="4" x="108" y="118" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="67" height="4" x="108" y="94" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="108" y="107" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="49.821" height="4" x="108" y="142" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="87" height="12" x="103" y="126" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="49" height="4" x="107" y="130" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="m185 130.5-2.75 2.75L181 132"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
      />
      <rect width="48" height="4" x="116" y="58" fill="currentColor" rx="2" />
      <path stroke="#A1A1AA" d="m183 58.5 3 3 3-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
      <path
        stroke="#A1A1AA"
        d="m106.437 63.438-1.717-1.718m0 0a3.023 3.023 0 0 0-2.137-5.158c-.801 0-1.569.319-2.136.885a3.02 3.02 0 0 0 4.272 4.272z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".625"
      />
    </svg>
  ),
  select: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93" height="80" x="100" y="76" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="62" height="4" x="107.75" y="84" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="62" height="4" x="108" y="120" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="67" height="4" x="108" y="96" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="71" height="4" x="108" y="132" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="49.821" height="4" x="108" y="144" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="87" height="12" x="103" y="104" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="49" height="4" x="107" y="108" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="M185.667 108 182 111.667 180.333 110"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".667"
      />
      <rect width="62" height="4" x="102" y="63" fill="currentColor" rx="2" />
      <path stroke="#A1A1AA" d="M184.333 63.667 187 66.333l2.667-2.666" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "multiple-select": (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect width="93" height="82" x="103" y="68" fill="#71717A" fillOpacity=".6" rx="6" />
      <rect width="62" height="4" x="110" y="76" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="67" height="4" x="110" y="87" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="49.821" height="4" x="110" y="139" fill="#fff" fillOpacity=".7" rx="1.5" />
      <rect width="87" height="12" x="106" y="122" fill="#000" fillOpacity=".5" rx="3" />
      <path
        stroke="#fff"
        d="m188 126.5-2.75 2.75L184 128"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
      />
      <rect width="87" height="12" x="106" y="109" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="21" height="4" x="110" y="126" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="m188 113.5-2.75 2.75L184 115"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
      />
      <rect width="87" height="12" x="106" y="96" fill="#000" fillOpacity=".5" rx="3" />
      <rect width="32" height="4" x="110" y="100" fill="#fff" rx="1.5" />
      <rect width="14" height="4" x="110" y="113" fill="#fff" rx="1.5" />
      <path
        stroke="#fff"
        d="m188 100.5-2.75 2.75L184 102"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".5"
      />
      <g fill="#4E4E54">
        <rect width="14" height="4" x="105" y="56" rx="2" />
        <rect width="21" height="4" x="121" y="56" rx="2" />
        <rect width="32" height="4" x="144" y="56" rx="2" />
      </g>
      <path stroke="#A1A1AA" d="M186.333 56.667 189 59.333l2.667-2.666" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  navbar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      className="text-[#a1a1aa] dark:text-[#52525b]"
      fill="currentColor"
      viewBox="0 0 300 200"
    >
      <rect width="248" height="16" x="26" y="92" fill="currentColor" rx="4" />
      <rect
        width="21"
        height="4"
        x="47"
        y="98"
        fill="currentColor"
        className="fill-[#e4e4e7] dark:fill-[#a1a1aa]"
        rx="2"
      />
      <rect width="21" height="4" x="74" y="98" fill="currentColor" rx="2" className="fill-zinc-950 dark:fill-white" />
      <rect
        width="21"
        height="4"
        x="101"
        y="98"
        fill="currentColor"
        className="fill-[#e4e4e7] dark:fill-[#a1a1aa]"
        rx="2"
      />
      <rect
        width="21"
        height="4"
        x="128"
        y="98"
        fill="currentColor"
        className="fill-[#e4e4e7] dark:fill-[#a1a1aa]"
        rx="2"
      />
      <rect
        width="21"
        height="4"
        x="236"
        y="98"
        fill="currentColor"
        className="fill-[#e4e4e7] dark:fill-[#a1a1aa]"
        rx="2"
      />
      <path
        stroke="currentColor"
        className="fill-[#e4e4e7] dark:fill-[#a1a1aa]"
        d="m263 99 2 2 2-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".75"
      />
      <path
        fill="currentColor"
        className="fill-zinc-950 dark:fill-white"
        d="M33.696 96.667h2.275c.2 0 .362 0 .493.01a1 1 0 0 1 .364.09.93.93 0 0 1 .404.405.9.9 0 0 1 .09.364c.011.13.011.292.011.493v2.46c0 .201 0 .363-.01.494a1 1 0 0 1-.09.363.93.93 0 0 1-.405.405 1 1 0 0 1-.364.09c-.13.011-.292.011-.493.011h-.119v.119c0 .2 0 .362-.011.493a.9.9 0 0 1-.09.363.93.93 0 0 1-.405.405 1 1 0 0 1-.363.09c-.131.011-.293.011-.493.011h-2.461c-.201 0-.363 0-.494-.011a1 1 0 0 1-.363-.09.92.92 0 0 1-.405-.405.9.9 0 0 1-.09-.363c-.01-.131-.01-.292-.01-.493v-2.46c0-.2 0-.363.01-.494a1 1 0 0 1 .09-.363.93.93 0 0 1 .405-.405 1 1 0 0 1 .364-.09c.13-.01.292-.01.493-.01h.304v-.12c0-.2 0-.362.011-.493a1 1 0 0 1 .09-.363.93.93 0 0 1 .405-.405.9.9 0 0 1 .363-.09c.131-.011.293-.011.494-.011m2.267 4.814h-.111v-1.97c0-.201 0-.363-.011-.494a1 1 0 0 0-.09-.363.93.93 0 0 0-.405-.405 1 1 0 0 0-.363-.09c-.131-.011-.293-.011-.493-.011h-1.787v-.111c0-.21 0-.357.01-.471a.6.6 0 0 1 .051-.226.56.56 0 0 1 .243-.242.6.6 0 0 1 .225-.051c.114-.01.261-.01.471-.01h2.26c.21 0 .357 0 .471.01a.6.6 0 0 1 .225.05.56.56 0 0 1 .243.243.6.6 0 0 1 .051.226c.01.114.01.26.01.471v2.444c0 .211 0 .358-.01.472a.6.6 0 0 1-.051.225.55.55 0 0 1-.243.243.6.6 0 0 1-.225.051c-.114.009-.26.009-.471.009m-4.149.705a.48.48 0 0 0 .353.147.48.48 0 0 0 .43-.25.47.47 0 0 0 .07-.25.48.48 0 0 0-.148-.352.48.48 0 0 0-.352-.148.48.48 0 0 0-.353.148.47.47 0 0 0-.147.352q0 .206.147.353"
        clipPath="url(#a)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  ),
  container: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect
        width="230"
        height="130"
        x="35"
        y="35"
        fill="currentColor"
        className="fill-zinc-200 dark:fill-zinc-600"
        rx="6"
      />
      <rect width="38" height="4" x="62" y="48" fill="currentColor" className="fill-zinc-800 dark:fill-white" rx="2" />
      <rect width="71" height="4" x="62" y="57" fill="currentColor" className="fill-muted-fg" rx="2" />
      <path fill="url(#a)" d="M251 28h.2v150h-.2z" />
      <path fill="url(#b)" d="M47 25h.2v150H47z" />
      <defs>
        <linearGradient id="a" x1="251.1" x2="251.1" y1="28" y2="178" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".275" stopColor="#71717A" />
          <stop offset=".515" stopColor="#71717A" />
          <stop offset=".74" stopColor="#71717A" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="b" x1="47.1" x2="47.1" y1="25" y2="175" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset=".275" stopColor="#71717A" />
          <stop offset=".515" stopColor="#71717A" />
          <stop offset=".74" stopColor="#71717A" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  sidebar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <rect
        width="243.75"
        height="150"
        x="28"
        y="25"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="5.625"
      />
      <rect
        width="45.938"
        height="133.125"
        x="36.438"
        y="33.438"
        fill="currentColor"
        className="fill-secondary"
        rx="3.75"
      />
      <path
        stroke="#71717A"
        d="m74.25 157.344 1.563 1.562 1.562-1.562"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".586"
      />
      <path
        stroke="#71717A"
        d="m73.312 102.734 1.094 1.094 1.094-1.094"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".41"
      />
      <rect width="19.688" height="3.75" x="50.5" y="40" fill="#A1A1AA" rx="1.875" />
      <rect width="13.125" height="2.813" x="49.563" y="155.312" fill="#9C9CAA" rx="1.406" />
      <rect width="19.688" height="2.813" x="49.563" y="159.062" fill="#A1A1AA" fillOpacity=".7" rx="1.406" />
      <rect width="25" height="4" x="42" y="54" fill="#A1A1AA" rx="1.875" />
      <rect width="31" height="4" x="42" y="62" fill="#A1A1AA" rx="1.875" />
      <rect width="25" height="4" x="42" y="70" fill="currentColor" className="text-fg" rx="1.875" />
      <rect width="36.563" height="4" x="41.125" y="106.562" fill="#A1A1AA" rx="1.875" />
      <rect width="21.563" height="1.166" x="42.063" y="102.812" fill="#A1A1AA" fillOpacity=".7" rx=".583" />
      <rect width="19" height="4" x="42" y="78" fill="#A1A1AA" rx="1.875" />
      <rect width="36.563" height="4" x="41.125" y="115" fill="#A1A1AA" rx="1.875" />
      <rect width="25" height="4" x="42" y="86" fill="#A1A1AA" rx="1.875" />
      <rect width="36.563" height="4" x="41.125" y="123.438" fill="#A1A1AA" rx="1.875" />
      <rect
        width="178.125"
        height="133.125"
        x="84.25"
        y="33.438"
        fill="currentColor"
        className="fill-secondary stroke-[0.5px] stroke-border"
        rx="3.75"
      />
      <rect width="7.688" height="7.688" x="40.563" y="154.375" fill="#D9D9D9" rx="1.708" />
      <path
        fill="currentColor"
        className="text-zinc-900 dark:text-white"
        d="M44.157 38.672h1.866c.165 0 .297 0 .405.009a.8.8 0 0 1 .298.074.76.76 0 0 1 .332.332.8.8 0 0 1 .074.298c.009.107.009.24.009.404v2.018c0 .165 0 .298-.01.405a.8.8 0 0 1-.073.298.76.76 0 0 1-.332.332.8.8 0 0 1-.298.074c-.108.01-.24.01-.405.01h-.098v.097c0 .164 0 .297-.009.404a.8.8 0 0 1-.073.298.76.76 0 0 1-.332.332.8.8 0 0 1-.298.074c-.108.01-.24.01-.405.01h-2.019c-.165 0-.297 0-.404-.01a.8.8 0 0 1-.299-.073.76.76 0 0 1-.331-.333.8.8 0 0 1-.074-.297c-.01-.108-.01-.24-.01-.405v-2.018c0-.165 0-.297.01-.405a.8.8 0 0 1 .074-.298.76.76 0 0 1 .332-.332.8.8 0 0 1 .298-.074c.107-.009.24-.009.404-.009h.25v-.097c0-.165 0-.297.009-.405a.8.8 0 0 1 .074-.298.76.76 0 0 1 .332-.332.8.8 0 0 1 .298-.074c.107-.01.24-.01.405-.01m1.86 3.95h-.092v-1.617c0-.165 0-.298-.009-.405a.8.8 0 0 0-.073-.298.76.76 0 0 0-.332-.332.8.8 0 0 0-.298-.074c-.108-.009-.24-.009-.405-.009h-1.465v-.091c0-.173 0-.293.007-.387a.5.5 0 0 1 .042-.184.46.46 0 0 1 .2-.2.5.5 0 0 1 .184-.041c.094-.008.214-.008.387-.008h1.853c.173 0 .293 0 .387.008a.5.5 0 0 1 .185.041.46.46 0 0 1 .199.2c.02.04.034.093.042.184.008.094.008.214.008.387V41.8c0 .173 0 .293-.008.387a.5.5 0 0 1-.042.185.46.46 0 0 1-.2.199.5.5 0 0 1-.184.042c-.094.007-.214.007-.386.007m-3.404.578a.4.4 0 0 0 .29.12.4.4 0 0 0 .204-.054.43.43 0 0 0 .206-.356.4.4 0 0 0-.121-.29.4.4 0 0 0-.29-.12.4.4 0 0 0-.289.12.4.4 0 0 0-.12.29q0 .17.12.29"
        clipPath="url(#a)"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  ),

  avatar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <circle cx="105.5" cy="78" r="12" fill="#71717A" />
      <g fill="#A1A1AA">
        <rect width="32" height="6" x="129" y="69.5" rx="2" />
        <rect width="77" height="6" x="129" y="80.5" rx="2" />
      </g>
      <g fill="#A1A1AA">
        <rect width="32" height="6" x="129" y="113" rx="2" />
        <rect width="77" height="6" x="129" y="124" rx="2" />
      </g>
      <rect width="24" height="24" x="93" y="110" fill="#71717A" rx="3" />
    </svg>
  ),
  carousel: (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="none" viewBox="0 0 300 200">
      <g fill="#71717A">
        <rect width="56" height="56" x="57" y="58" rx="4" />
        <rect width="56" height="56" x="122" y="58" rx="4" />
        <rect width="56" height="56" x="187" y="58" rx="4" />
      </g>
      <rect
        width="12"
        height="12"
        x="228.5"
        y="129.5"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="6"
      />
      <path
        fill="currentColor"
        className=""
        d="m233.3 133.767 2.133 2.133-2.133 2.133"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".4"
      />
      <rect
        width="12"
        height="12"
        x="215"
        y="130"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="6"
      />
      <path
        fill="currentColor"
        className=""
        d="m221.4 138.533-2.133-2.133 2.133-2.133"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".4"
      />
      <rect
        width="4"
        height="4"
        x="57"
        y="132"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="2"
      />
      <rect
        width="4"
        height="4"
        x="63"
        y="132"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="2"
      />
      <rect
        width="4"
        height="4"
        x="69"
        y="132"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="2"
      />
      <rect width="10" height="4" x="75" y="132" fill="currentColor" className="fill-zinc-900 dark:fill-white" rx="2" />
      <rect
        width="4"
        height="4"
        x="87"
        y="132"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="2"
      />
      <rect
        width="4"
        height="4"
        x="93"
        y="132"
        fill="currentColor"
        className="fill-zinc-300 dark:fill-zinc-600"
        rx="2"
      />
    </svg>
  )
}

interface ThumbnailWrapperProps {
  thumbnail: string
}

export function ThumbnailWrapper({ thumbnail }: ThumbnailWrapperProps) {
  return thumbnailMap[thumbnail] ? (
    <div className="relative bg-muted/50 border [&>svg]:shrink-0 [&>svg]:w-full [&>svg]:h-48 rounded-md">
      {thumbnailMap[thumbnail] || null}
    </div>
  ) : null
}
