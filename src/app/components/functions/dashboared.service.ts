import { FormRequest } from "../interface/form.interface";

export class dashboardFunctions {

    /////////////////////////////////////////////////// agesChart the form submiters base on age
    getDataForFormSender(FormsSubList: FormRequest[]) {
        const ageGroups = [20, 30, 40, 50];
        const data = [0, 0, 0, 0, 0];

        FormsSubList.forEach(form => {
            const age = this.calculateAge(form.personalInformation.birthDate);
            // Find the appropriate index for the age
            let index = ageGroups.findIndex(group => age < group);

            if (index === -1) {
                index = data.length - 1;
            }
            data[index]++;
        });
        return data;
    }

    calculateAge(birthDate: Date): number {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const m = today.getMonth() - birthDateObj.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    }
    ///////////////////////////////////////////////////


    ///////////////////////////////////////////////////engineChart the most wanted motor base picking of genders
    getMostWantedMotor(FormsSubList: FormRequest[]) {
        const motorCounts: { [gender: string]: { [motor: string]: number } } = {};
        let mostWantedMotor = '';
        let maxCount = 0;

        FormsSubList.forEach(form => {
            // const gendersCount: { [gender: string]: number } = {};
            const gender = form.personalInformation.gender;
            const motor = form.carInformation.motor;
            if (gender && motor) {
                // If the gender is not already in motorCounts, initialize it
                if (!motorCounts[gender]) {
                    motorCounts[gender] = {};
                }
                // Update the motor count based on gender and motor type if it doesn't already exist
                if (!motorCounts[gender][motor]) {
                    motorCounts[gender][motor] = 1;
                } else {
                    motorCounts[gender][motor]++;
                }
                // Update mostWantedMotor if the count for this motor is higher than the current maxCount
                if (motorCounts[gender][motor] > maxCount) {
                    maxCount = motorCounts[gender][motor];
                    mostWantedMotor = motor;
                }
            }
        });
        return mostWantedMotor;
    }


    getGendersCountForMostWantedMotor(mostWantedMotor: string, FormsSubList: FormRequest[]) {
        const gendersCount: { [gender: string]: number } = {};

        FormsSubList.forEach(form => {
            const gender = form.personalInformation.gender;
            const motor = form.carInformation.motor;
            if (gender && motor && motor === mostWantedMotor) {
                // If the gender is not already in gendersCount, initialize it
                if (!gendersCount[gender]) {
                    gendersCount[gender] = 1;
                } else {
                    gendersCount[gender]++;
                }
            }
        });

        return gendersCount;
    }
    ///////////////////////////////////////////////////


    ///////////////////////////////////////////////////
    getHobbiesData(FormsSubList: FormRequest[]) {
        const hobbiesCounts: { [hobbies: string]: number } = {};
        FormsSubList.forEach(form => {
            form.morePersonalInformation.hobbies.forEach(hobbies => {
                let hobbie = String(hobbies);
                console.log("my hobbies is: " + hobbies)
                if (hobbiesCounts[hobbie]) {
                    hobbiesCounts[hobbie]++;
                } else {
                    hobbiesCounts[hobbie] = 1;
                }
            });
        });

        // Sort hobbies counts in descending order
        const sortedHobbies = Object.keys(hobbiesCounts).sort((a, b) => hobbiesCounts[b] - hobbiesCounts[a]);

        // Take top 3 most common hobbies
        const labels = sortedHobbies.slice(0, 3);
        const data = labels.map(label => hobbiesCounts[label]);

        return { labels, data };
    }

}