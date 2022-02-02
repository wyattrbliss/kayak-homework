import { Alliance } from "../constants/constants";

// to get the correct alliance
export function getAlliance(alliance: string) {
    switch(alliance) { 
        case Alliance.OW: { 
           return "Oneworld"; 
        } 
        case Alliance.SA: { 
           return "Star Alliance";
        }
        case Alliance.ST: {
            return "Sky Team"; 
         } 
        default: { 
            return "none";
        } 
     } 
}

// helper to simplify the url
export function shortenURL(url: string) {
    return url.replace("https://", "").replace("http://", "").split("/")[0];
}