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
}