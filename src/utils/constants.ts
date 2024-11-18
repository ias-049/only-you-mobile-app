import { IMAGES } from "./images";
import { COLORS } from "./theme";

export const BASE_URL = '';
export const API_VERSION = 'v1';
export const API_URL = `${BASE_URL}/${API_VERSION}/`;


export type Country = {
    name: string;
    flag: string;
    value: string;
    label: string;
    code: string;
    dial_code: string
}

export type HomeTag = {
    id: string;
    name: string
}

export type HomeCarouselType = {
    id: string;
    img: any;
    isFav: boolean
}

export const neonBlueShadow = {
    shadowColor: "#2996D7",
    borderColor: "#2996D7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderWidth: 2,
    elevation: 5, // For Android shadow
}
export const neonPinkShadow = {
    shadowColor: COLORS.secondary, // Neon shadow color
    borderWidth: 2,
    borderColor: COLORS.secondary, // Neon border color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
}

export const HOMETAGS: HomeTag[] = [
    { id: "0", name: "dash" },
    { id: "1", name: "Man" },
    { id: "2", name: "Shoes" },
    { id: "3", name: "Woman" },
    { id: "4", name: "Forest" },
    { id: "5", name: "Smart Phone" },
]

export const COUNTRIES: Country[] = [
    {
        "name": "Afghanistan",
        "flag": "🇦🇫",
        "code": "AF",
        "dial_code": "+93",
        "label": "🇦🇫 Afghanistan (+93)",
        "value": "+93"
    },
    {
        "name": "Åland Islands",
        "flag": "🇦🇽",
        "code": "AX",
        "dial_code": "+358",
        "label": "🇦🇽 Åland Islands (+358)",
        "value": "+358"
    },
    {
        "name": "Albania",
        "flag": "🇦🇱",
        "code": "AL",
        "dial_code": "+355",
        "label": "🇦🇱 Albania (+355)",
        "value": "+355"
    },
    {
        "name": "Algeria",
        "flag": "🇩🇿",
        "code": "DZ",
        "dial_code": "+213",
        "label": "🇩🇿 Algeria (+213)",
        "value": "+213"
    },
    {
        "name": "American Samoa",
        "flag": "🇦🇸",
        "code": "AS",
        "dial_code": "+1684",
        "label": "🇦🇸 American Samoa (+1684)",
        "value": "+1684"
    },
    {
        "name": "Andorra",
        "flag": "🇦🇩",
        "code": "AD",
        "dial_code": "+376",
        "label": "🇦🇩 Andorra (+376)",
        "value": "+376"
    },
    {
        "name": "Angola",
        "flag": "🇦🇴",
        "code": "AO",
        "dial_code": "+244",
        "label": "🇦🇴 Angola (+244)",
        "value": "+244"
    },
    {
        "name": "Anguilla",
        "flag": "🇦🇮",
        "code": "AI",
        "dial_code": "+1264",
        "label": "🇦🇮 Anguilla (+1264)",
        "value": "+1264"
    },
    {
        "name": "Antarctica",
        "flag": "🇦🇶",
        "code": "AQ",
        "dial_code": "+672",
        "label": "🇦🇶 Antarctica (+672)",
        "value": "+672"
    },
    {
        "name": "Antigua and Barbuda",
        "flag": "🇦🇬",
        "code": "AG",
        "dial_code": "+1268",
        "label": "🇦🇬 Antigua and Barbuda (+1268)",
        "value": "+1268"
    },
    {
        "name": "Argentina",
        "flag": "🇦🇷",
        "code": "AR",
        "dial_code": "+54",
        "label": "🇦🇷 Argentina (+54)",
        "value": "+54"
    },
    {
        "name": "Armenia",
        "flag": "🇦🇲",
        "code": "AM",
        "dial_code": "+374",
        "label": "🇦🇲 Armenia (+374)",
        "value": "+374"
    },
    {
        "name": "Aruba",
        "flag": "🇦🇼",
        "code": "AW",
        "dial_code": "+297",
        "label": "🇦🇼 Aruba (+297)",
        "value": "+297"
    },
    {
        "name": "Australia",
        "flag": "🇦🇺",
        "code": "AU",
        "dial_code": "+61",
        "label": "🇦🇺 Australia (+61)",
        "value": "+61"
    },
    {
        "name": "Austria",
        "flag": "🇦🇹",
        "code": "AT",
        "dial_code": "+43",
        "label": "🇦🇹 Austria (+43)",
        "value": "+43"
    },
    {
        "name": "Azerbaijan",
        "flag": "🇦🇿",
        "code": "AZ",
        "dial_code": "+994",
        "label": "🇦🇿 Azerbaijan (+994)",
        "value": "+994"
    },
    {
        "name": "Bahamas",
        "flag": "🇧🇸",
        "code": "BS",
        "dial_code": "+1242",
        "label": "🇧🇸 Bahamas (+1242)",
        "value": "+1242"
    },
    {
        "name": "Bahrain",
        "flag": "🇧🇭",
        "code": "BH",
        "dial_code": "+973",
        "label": "🇧🇭 Bahrain (+973)",
        "value": "+973"
    },
    {
        "name": "Bangladesh",
        "flag": "🇧🇩",
        "code": "BD",
        "dial_code": "+880",
        "label": "🇧🇩 Bangladesh (+880)",
        "value": "+880"
    },
    {
        "name": "Barbados",
        "flag": "🇧🇧",
        "code": "BB",
        "dial_code": "+1246",
        "label": "🇧🇧 Barbados (+1246)",
        "value": "+1246"
    },
    {
        "name": "Belarus",
        "flag": "🇧🇾",
        "code": "BY",
        "dial_code": "+375",
        "label": "🇧🇾 Belarus (+375)",
        "value": "+375"
    },
    {
        "name": "Belgium",
        "flag": "🇧🇪",
        "code": "BE",
        "dial_code": "+32",
        "label": "🇧🇪 Belgium (+32)",
        "value": "+32"
    },
    {
        "name": "Belize",
        "flag": "🇧🇿",
        "code": "BZ",
        "dial_code": "+501",
        "label": "🇧🇿 Belize (+501)",
        "value": "+501"
    },
    {
        "name": "Benin",
        "flag": "🇧🇯",
        "code": "BJ",
        "dial_code": "+229",
        "label": "🇧🇯 Benin (+229)",
        "value": "+229"
    },
    {
        "name": "Bermuda",
        "flag": "🇧🇲",
        "code": "BM",
        "dial_code": "+1441",
        "label": "🇧🇲 Bermuda (+1441)",
        "value": "+1441"
    },
    {
        "name": "Bhutan",
        "flag": "🇧🇹",
        "code": "BT",
        "dial_code": "+975",
        "label": "🇧🇹 Bhutan (+975)",
        "value": "+975"
    },
    {
        "name": "Bolivia, Plurinational State of bolivia",
        "flag": "🇧🇴",
        "code": "BO",
        "dial_code": "+591",
        "label": "🇧🇴 Bolivia (+591)",
        "value": "+591"
    },
    {
        "name": "Bosnia and Herzegovina",
        "flag": "🇧🇦",
        "code": "BA",
        "dial_code": "+387",
        "label": "🇧🇦 Bosnia and Herzegovina (+387)",
        "value": "+387"
    },
    {
        "name": "Botswana",
        "flag": "🇧🇼",
        "code": "BW",
        "dial_code": "+267",
        "label": "🇧🇼 Botswana (+267)",
        "value": "+267"
    },
    {
        "name": "Bouvet Island",
        "flag": "🇧🇻",
        "code": "BV",
        "dial_code": "+47",
        "label": "🇧🇻 Bouvet Island (+47)",
        "value": "+47"
    },
    {
        "name": "Brazil",
        "flag": "🇧🇷",
        "code": "BR",
        "dial_code": "+55",
        "label": "🇧🇷 Brazil (+55)",
        "value": "+55"
    },
    {
        "name": "British Indian Ocean Territory",
        "flag": "🇮🇴",
        "code": "IO",
        "dial_code": "+246",
        "label": "🇮🇴 British Indian Ocean Territory (+246)",
        "value": "+246"
    },
    {
        "name": "Brunei Darussalam",
        "flag": "🇧🇳",
        "code": "BN",
        "dial_code": "+673",
        "label": "🇧🇳 Brunei Darussalam (+673)",
        "value": "+673"
    },
    {
        "name": "Bulgaria",
        "flag": "🇧🇬",
        "code": "BG",
        "dial_code": "+359",
        "label": "🇧🇬 Bulgaria (+359)",
        "value": "+359"
    },
    {
        "name": "Burkina Faso",
        "flag": "🇧🇫",
        "code": "BF",
        "dial_code": "+226",
        "label": "🇧🇫 Burkina Faso (+226)",
        "value": "+226"
    },
    {
        "name": "Burundi",
        "flag": "🇧🇮",
        "code": "BI",
        "dial_code": "+257",
        "label": "🇧🇮 Burundi (+257)",
        "value": "+257"
    },

    {
        "name": "Maldives",
        "flag": "🇲🇻",
        "code": "MV",
        "dial_code": "+960",
        "label": "🇲🇻 Maldives (+960)",
        "value": "+960"
    },
    {
        "name": "Mali",
        "flag": "🇲🇱",
        "code": "ML",
        "dial_code": "+223",
        "label": "🇲🇱 Mali (+223)",
        "value": "+223"
    },
    {
        "name": "Malta",
        "flag": "🇲🇹",
        "code": "MT",
        "dial_code": "+356",
        "label": "🇲🇹 Malta (+356)",
        "value": "+356"
    },
    {
        "name": "Marshall Islands",
        "flag": "🇲🇭",
        "code": "MH",
        "dial_code": "+692",
        "label": "🇲🇭 Marshall Islands (+692)",
        "value": "+692"
    },
    {
        "name": "Martinique",
        "flag": "🇲🇶",
        "code": "MQ",
        "dial_code": "+596",
        "label": "🇲🇶 Martinique (+596)",
        "value": "+596"
    },
    {
        "name": "Mauritania",
        "flag": "🇲🇷",
        "code": "MR",
        "dial_code": "+222",
        "label": "🇲🇷 Mauritania (+222)",
        "value": "+222"
    },
    {
        "name": "Mauritius",
        "flag": "🇲🇺",
        "code": "MU",
        "dial_code": "+230",
        "label": "🇲🇺 Mauritius (+230)",
        "value": "+230"
    },
    {
        "name": "Mayotte",
        "flag": "🇾🇹",
        "code": "YT",
        "dial_code": "+262",
        "label": "🇾🇹 Mayotte (+262)",
        "value": "+262"
    },
    {
        "name": "Mexico",
        "flag": "🇲🇽",
        "code": "MX",
        "dial_code": "+52",
        "label": "🇲🇽 Mexico (+52)",
        "value": "+52"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "flag": "🇫🇲",
        "code": "FM",
        "dial_code": "+691",
        "label": "🇫🇲 Micronesia, Federated States of Micronesia (+691)",
        "value": "+691"
    },
    {
        "name": "Moldova",
        "flag": "🇲🇩",
        "code": "MD",
        "dial_code": "+373",
        "label": "🇲🇩 Moldova (+373)",
        "value": "+373"
    },
    {
        "name": "Monaco",
        "flag": "🇲🇨",
        "code": "MC",
        "dial_code": "+377",
        "label": "🇲🇨 Monaco (+377)",
        "value": "+377"
    },
    {
        "name": "Mongolia",
        "flag": "🇲🇳",
        "code": "MN",
        "dial_code": "+976",
        "label": "🇲🇳 Mongolia (+976)",
        "value": "+976"
    },
    {
        "name": "Montenegro",
        "flag": "🇲🇪",
        "code": "ME",
        "dial_code": "+382",
        "label": "🇲🇪 Montenegro (+382)",
        "value": "+382"
    },
    {
        "name": "Montserrat",
        "flag": "🇲🇸",
        "code": "MS",
        "dial_code": "+1664",
        "label": "🇲🇸 Montserrat (+1664)",
        "value": "+1664"
    },
    {
        "name": "Morocco",
        "flag": "🇲🇦",
        "code": "MA",
        "dial_code": "+212",
        "label": "🇲🇦 Morocco (+212)",
        "value": "+212"
    },
    {
        "name": "Mozambique",
        "flag": "🇲🇿",
        "code": "MZ",
        "dial_code": "+258",
        "label": "🇲🇿 Mozambique (+258)",
        "value": "+258"
    },
    {
        "name": "Myanmar",
        "flag": "🇲🇲",
        "code": "MM",
        "dial_code": "+95",
        "label": "🇲🇲 Myanmar (+95)",
        "value": "+95"
    },
    {
        "name": "Namibia",
        "flag": "🇳🇦",
        "code": "NA",
        "dial_code": "+264",
        "label": "🇳🇦 Namibia (+264)",
        "value": "+264"
    },
    {
        "name": "Nauru",
        "flag": "🇳🇷",
        "code": "NR",
        "dial_code": "+674",
        "label": "🇳🇷 Nauru (+674)",
        "value": "+674"
    },
    {
        "name": "Nepal",
        "flag": "🇳🇵",
        "code": "NP",
        "dial_code": "+977",
        "label": "🇳🇵 Nepal (+977)",
        "value": "+977"
    },
    {
        "name": "Netherlands",
        "flag": "🇳🇱",
        "code": "NL",
        "dial_code": "+31",
        "label": "🇳🇱 Netherlands (+31)",
        "value": "+31"
    },
    {
        "name": "Netherlands Antilles",
        "flag": "",
        "code": "AN",
        "dial_code": "+599",
        "label": "Netherlands Antilles (+599)",
        "value": "+599"
    },
    {
        "name": "New Caledonia",
        "flag": "🇳🇨",
        "code": "NC",
        "dial_code": "+687",
        "label": "🇳🇨 New Caledonia (+687)",
        "value": "+687"
    },
    {
        "name": "New Zealand",
        "flag": "🇳🇿",
        "code": "NZ",
        "dial_code": "+64",
        "label": "🇳🇿 New Zealand (+64)",
        "value": "+64"
    },
    {
        "name": "Nicaragua",
        "flag": "🇳🇮",
        "code": "NI",
        "dial_code": "+505",
        "label": "🇳🇮 Nicaragua (+505)",
        "value": "+505"
    },
    {
        "name": "Niger",
        "flag": "🇳🇪",
        "code": "NE",
        "dial_code": "+227",
        "label": "🇳🇪 Niger (+227)",
        "value": "+227"
    },
    {
        "name": "Nigeria",
        "flag": "🇳🇬",
        "code": "NG",
        "dial_code": "+234",
        "label": "🇳🇬 Nigeria (+234)",
        "value": "+234"
    },
    {
        "name": "Niue",
        "flag": "🇳🇺",
        "code": "NU",
        "dial_code": "+683",
        "label": "🇳🇺 Niue (+683)",
        "value": "+683"
    },
    {
        "name": "Norfolk Island",
        "flag": "🇳🇫",
        "code": "NF",
        "dial_code": "+672",
        "label": "🇳🇫 Norfolk Island (+672)",
        "value": "+672"
    },
    {
        "name": "Northern Mariana Islands",
        "flag": "🇲🇵",
        "code": "MP",
        "dial_code": "+1670",
        "label": "🇲🇵 Northern Mariana Islands (+1670)",
        "value": "+1670"
    },
    {
        "name": "Norway",
        "flag": "🇳🇴",
        "code": "NO",
        "dial_code": "+47",
        "label": "🇳🇴 Norway (+47)",
        "value": "+47"
    },
    {
        "name": "Oman",
        "flag": "🇴🇲",
        "code": "OM",
        "dial_code": "+968",
        "label": "🇴🇲 Oman (+968)",
        "value": "+968"
    },
    {
        "name": "Pakistan",
        "flag": "🇵🇰",
        "code": "PK",
        "dial_code": "+92",
        "label": "🇵🇰 Pakistan (+92)",
        "value": "+92"
    },
    {
        "name": "Palau",
        "flag": "🇵🇼",
        "code": "PW",
        "dial_code": "+680",
        "label": "🇵🇼 Palau (+680)",
        "value": "+680"
    },
    {
        "name": "Panama",
        "flag": "🇵🇦",
        "code": "PA",
        "dial_code": "+507",
        "label": "🇵🇦 Panama (+507)",
        "value": "+507"
    },
    {
        "name": "Papua New Guinea",
        "flag": "🇵🇬",
        "code": "PG",
        "dial_code": "+675",
        "label": "🇵🇬 Papua New Guinea (+675)",
        "value": "+675"
    },
    {
        "name": "Paraguay",
        "flag": "🇵🇾",
        "code": "PY",
        "dial_code": "+595",
        "label": "🇵🇾 Paraguay (+595)",
        "value": "+595"
    },
    {
        "name": "Peru",
        "flag": "🇵🇪",
        "code": "PE",
        "dial_code": "+51",
        "label": "🇵🇪 Peru (+51)",
        "value": "+51"
    },
    {
        "name": "Philippines",
        "flag": "🇵🇭",
        "code": "PH",
        "dial_code": "+63",
        "label": "🇵🇭 Philippines (+63)",
        "value": "+63"
    },
    {
        "name": "Pitcairn Islands",
        "flag": "🇵🇬",
        "code": "PN",
        "dial_code": "+872",
        "label": "🇵🇬 Pitcairn Islands (+872)",
        "value": "+872"
    }
];

export const CAROUSEL_DATA: HomeCarouselType[] = [
    { id: '1', img: IMAGES.carousel, isFav: true },
    { id: '1', img: IMAGES.carousel, isFav: true },
    { id: '1', img: IMAGES.carousel, isFav: true },
    { id: '1', img: IMAGES.carousel, isFav: true },
]

export const DEMO_IMAGES = [
    {
        id: "1",
        image: IMAGES.userProfile
    },
    {
        id: "3",
        image: IMAGES.profile
    },
    {
        id: "2",
        image: IMAGES.carousel
    },
    {
        id: "4",
        image: IMAGES.userProfile
    },
    {
        id: "5",
        image: IMAGES.profile
    },
    {
        id: "6",
        image: IMAGES.carousel
    },
    {
        id: "7",
        image: IMAGES.userProfile
    },
    {
        id: "8",
        image: IMAGES.profile
    },
    {
        id: "9",
        image: IMAGES.carousel
    },
    {
        id: "10",
        image: IMAGES.userProfile
    },
    {
        id: "11",
        image: IMAGES.profile
    },
    {
        id: "12",
        image: IMAGES.carousel
    },
]