export const employees = [
    { id: 1, name: "Anikó", role: "Developer", salary: 900000 },
    { id: 2, name: "Gergő", role: "Designer", salary: 750000 },
    { id: 3, name: "Zoltán", role: "Developer", salary: 1100000 },
    { id: 4, name: "Eszter", role: "Manager", salary: 1200000 },
    { id: 5, name: "Dávid", role: "Developer", salary: 850000 }
];

/**
 * Task 1: Find The High Rollers
 * Return an array of names of employees who earn more than the given limit.
 */
export function getHighEarners(staff, limit) {
    return staff
        .filter(employee => employee.salary > limit)
        .map(employee => employee.name);
}

/**
 * Task 2: Status Update
 * The company is having a 'Developer' bonus day.
 * Increase the salary of all "Developer" roles by 10%.
 * Return the updated array.
 */
export function applyDevBonus(staff) {
    return staff.map(employee => {
        if (employee.role === "Developer") {
            return {
                ...employee,
                salary: Math.round(employee.salary * 1.1)
            };
        }
        return { ...employee };
    });
}
