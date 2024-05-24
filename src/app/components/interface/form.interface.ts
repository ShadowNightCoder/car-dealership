export interface PersonalInformationForm {
    fullname: string;
    gender: string;
    email: string;
    birthDate: Date;
}

export interface MorePersonalInformationForm {
    address: string;
    city: string;
    country: string;
    hobbies: hobbies[];
}

export interface CarInformationForm {
    favoriteColor: string;
    seats: number;
    motor: string;
}


export interface hobbies {
    hobbieName: string,
}

export interface FormRequest {
    personalInformation: PersonalInformationForm;
    morePersonalInformation: MorePersonalInformationForm;
    carInformation: CarInformationForm;
}