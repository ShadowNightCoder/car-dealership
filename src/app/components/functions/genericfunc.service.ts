export class genericFunction {


    isValidDate(dateString: string): boolean {
        const parsedDate = new Date(dateString);
        if (isNaN(parsedDate.getTime())) {
            return false;
        }

        // Check if the date is within the last 100 years and not within the next 10 years
        const currentDate = new Date();
        const tenYearsAgo = new Date(currentDate);
        const hundredYearsAgo = new Date(currentDate);
        tenYearsAgo.setFullYear(currentDate.getFullYear() - 10);
        hundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);
        return parsedDate >= hundredYearsAgo && parsedDate <= tenYearsAgo;
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

}