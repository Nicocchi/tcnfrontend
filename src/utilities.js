var utilities = {
    formatDate(date, format="mm/dd/yyyy") {
        const parsedDate = new Date(date);
        const dd = parsedDate.getDate();
        const mm = parsedDate.toLocaleString("default", { month: "long" });
        const mmd = parsedDate.getMonth();
        const yyyy = parsedDate.getFullYear();

        let newDate = "";

        switch(format) {
            case "mm/dd/yyyy":
                newDate = `${mmd}/${dd}/${yyyy}`
                break;
            case "mm dd, yyyy":
                newDate = `${mm} ${dd}, ${yyyy}`
                break;
            default:
                newDate = `${mm} ${dd}, ${yyyy}`
                break;
        }

        return newDate;
    }
}

export default utilities;