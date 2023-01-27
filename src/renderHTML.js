import dotenv
import {ID_STRING, TYPE_CHART, ARRAY_LABELS, STRING_LABEL, ARRAY_DATA, BORDER_WIDTH, BEGIN_AT_ZERO} from './lib.js'; // process.env.ID_STRING | 
dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file) // require('dotenv').config();

const generateChart = () => {
  return "<script> new Chart("+ID_STRING+", {"+"type:"+TYPE_CHART+","+"data: {"+"labels:"+ ARRAY_LABELS+","+"datasets:"+ "[{"+"label:"+ STRING_LABEL+","+"data:"+ ARRAY_DATA+","+"borderWidth:"+BORDER_WIDTH+"}]"+"},"+"options: {"+ "scales: { y: { "+ "beginAtZero:"+ BEGIN_AT_ZERO + "}"+ "}"+"}"+"}); </script>";
};
