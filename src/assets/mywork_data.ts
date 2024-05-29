import project0_img from "./project0_img.jpg";
import project1_img from "./project1_img.jpg";
import project2_img from "./project2_img.jpg";
import project3_img from "./project3_img.jpg";

interface MyWorkData {
  w_no: number;
  w_name: string;
  w_img: string;
  w_link?: string;
}

const mywork_data: MyWorkData[] = [
  {
    w_no: 1,
    w_name: "Like Fish DO - application",
    w_img: project0_img,
    w_link: "https://like-fish-do.netlify.app/rituals",
  },
  {
    w_no: 2,
    w_name: "Enjoy The Photo2 - application",
    w_img: project1_img,
    w_link: "https://enjoy-the-photos-2.netlify.app/",
  },
  {
    w_no: 3,
    w_name: "calendar - application",
    w_img: project2_img,
    w_link: "https://advancedcalendarmikexd.netlify.app/",
  },
  {
    w_no: 4,
    w_name: "Enjoy The Photo - application",
    w_img: project3_img,
  },
];

export default mywork_data;
