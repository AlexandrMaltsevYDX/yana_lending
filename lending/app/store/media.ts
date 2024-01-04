import {create} from "zustand";
export interface Media {
    width: string;
    setValue: (newVal:string)=> void;
}

export const useMedia = create<Media>((set) => ({
    width: "1600",
    setValue: (newVal) => set(() => ({width: newVal}))
}))


