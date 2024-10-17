'use client'

import React from 'react'

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
  'file-trigger': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 300 200">
      <rect width="93.237" height="27.971" x="124" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="149.174" y="98.121" fill="#fff" rx="1.865" />
      <rect width="26.97" height="26.971" x="83.5" y="86.5" fill="#fff" rx="13.485" />
      <rect width="26.97" height="26.971" x="83.5" y="86.5" stroke="#D4D4D8" rx="13.485" />
      <rect width="3.73" height="3.729" x="95" y="98" fill="#3F3F46" rx="1.865" />
    </svg>
  ),
  toggle: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
      <rect width="93.237" height="27.971" x="103" y="86" fill="#71717A" rx="3.729" />
      <rect width="42.889" height="3.729" x="137" y="98" fill="#fff" rx="1.865" />
      <path
        fill="#A1A1AA"
        d="m123.134 104.29-1.946-1.947-2.048 2.047a.377.377 0 0 1-.631-.268.38.38 0 0 1 .101-.262l2.047-2.047-1.946-1.947a.87.87 0 0 1-.228-.838.88.88 0 0 1 .606-.622l3.362-.96a.13.13 0 0 0 .075-.059l1.074-1.88a.86.86 0 0 1 .643-.433.88.88 0 0 1 .735.249l2.7 2.699a.876.876 0 0 1-.185 1.378l-1.88 1.075a.12.12 0 0 0-.058.074l-.96 3.362a.873.873 0 0 1-1.072.604.9.9 0 0 1-.389-.225"
      />
    </svg>
  ),
  menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
      <rect width="28" height="28" x="21" y="20" fill="#71717A" rx="14" />
      <rect width="4" height="4" x="33" y="32" fill="#fff" rx="2" />
      <path
        stroke="#A1A1AA"
        d="m57 32 4 4 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
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
  'list-box': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
  'tag-group': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
  'grid-list': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
      <path
        stroke="#A1A1AA"
        d="M184.333 63.667 187 66.333l2.667-2.666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'combo-box': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
      <path
        stroke="#A1A1AA"
        d="m183 58.5 3 3 3-3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.125"
      />
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
      <path
        stroke="#A1A1AA"
        d="M184.333 63.667 187 66.333l2.667-2.666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'multiple-select': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="200"
      fill="none"
      viewBox="0 0 300 200"
    >
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
      <path
        stroke="#A1A1AA"
        d="M186.333 56.667 189 59.333l2.667-2.666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface ThumbnailWrapperProps {
  thumbnail: string
}

export function ThumbnailWrapper({ thumbnail }: ThumbnailWrapperProps) {
  return thumbnailMap[thumbnail] ? (
    <div className="relative bg-muted/50 border [&>svg]:shrink-0 [&>svg]:w-full [&>svg]:h-48 rounded-lg">
      {thumbnailMap[thumbnail] || null}
    </div>
  ) : null
}
