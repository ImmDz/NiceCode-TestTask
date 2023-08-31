import denis from "../assets/denis.png";
import aleksandra from "../assets/aleksandra.png";
import alevtina from "../assets/alevtina.png";
import dmitry from "../assets/Dmitry.png";
import aleksandr from "../assets/aleksandr.png";
import artur from "../assets/Artur.png";
import igor from "../assets/Igor.png";
import rufina from "../assets/Rufina.png";
import victoria from "../assets/victoria.png";
import family from "../assets/family.png";
import doctor from "../assets/doctor.png";
import massage from "../assets/massage.png";
import event from "../assets/event.png";
import location from "../assets/location.png";
import nofoto from "../assets/nofoto.svg";
import telegram from "../assets/talegram.svg";
import warning from "../assets/Mod.svg";
import { Camera } from "../assets/Camera";
import { PersonalArea } from "../assets/PersonalArea";

import { v4 as uuidv4 } from "uuid";

export const patients = [
  {
    id: uuidv4(),
    name: "Кравцова Александра",
    img: aleksandra,
    icon: telegram,
    age: 22,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Рожков Денис",
    img: denis,
    icon: undefined,
    age: 30,
    gender: "муж",
    notes: [
      {
        id: uuidv4(),
        text: "Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        img: "",
      },
      {
        id: uuidv4(),
        text: "Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.",
        img: location,
      },
    ],
    consultations: [
      {
        id: 0,
        title: "Online консультация",
        date: "15.01.2019, 12:30-13:00",
        status: true,
        icon: Camera,
      },
      {
        id: 1,
        title: "Online консультация",
        date: "15.01.2019, 12:30-13:00",
        status: true,
        icon: Camera,
      },
      {
        id: 2,
        title: "Online консультация",
        date: "15.01.2019, 12:30-13:00",
        status: false,
        icon: PersonalArea,
      },
    ],
    videos: [
      {
        id: 0,
        title: "Крабик, ходьба в бок в приседе с двумя резинками Кра…",
        author: "Астахова Е.В.",
        date: "15.01.2019 - 22.01.2019",
        img: family,
      },
      {
        id: 1,
        title: "Разминка для локтевого сустава",
        author: "Астахова Е.В.",
        date: "15.01.2019 - 22.01.2019",
        img: massage,
      },
      {
        id: 2,
        title: "Разминка для локтевого суставаРазминка для локтевого..",
        author: "Астахова Е.В.",
        date: "15.01.2019 - 22.01.2019",
        img: doctor,
      },
    ],
    events: [
      {
        id: 0,
        title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
        type: "Вебинар",
        date: "9 марта 2021",
        time: "17:00",
        img: event,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Кравцова Александра",
    img: aleksandra,
    icon: warning,
    age: 22,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Диброва Алевтина",
    img: alevtina,
    icon: undefined,
    age: 23,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Иванов Дмитрий",
    img: dmitry,
    icon: undefined,
    age: 32,
    gender: "муж",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "nosikov@list.ru",
    img: nofoto,
    icon: undefined,
    age: 28,
    gender: "муж",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Форс Александр",
    img: aleksandr,
    icon: undefined,
    age: 25,
    gender: "муж",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Ахмедов Артур",
    img: artur,
    icon: undefined,
    age: 21,
    gender: "муж",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Блаженов Игорь",
    img: igor,
    icon: undefined,
    age: 23,
    gender: "муж",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Валиева Руфина",
    img: rufina,
    icon: undefined,
    age: 27,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Волошина Виктория",
    img: victoria,
    icon: undefined,
    age: 33,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
  {
    id: uuidv4(),
    name: "Волошина Виктория",
    img: victoria,
    icon: undefined,
    age: 33,
    gender: "жен",
    notes: [],
    consultations: [],
    videos: [],
    events: [],
  },
];
