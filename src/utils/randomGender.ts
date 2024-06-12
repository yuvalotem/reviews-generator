import { UserGender } from "../types";

export const randomGender = () => Math.random() > 0.5 ? UserGender.Men : UserGender.Women
