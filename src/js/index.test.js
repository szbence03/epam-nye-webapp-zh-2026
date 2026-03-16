import { describe, it, expect } from 'vitest';
import { employees, getHighEarners, applyDevBonus, calculateActivePayroll } from './index';

describe('Mid-Semester JS Test', () => {
    it('Task 1: getHighEarners should return correct names', () => {
        const result = getHighEarners(employees, 1000000);
        expect(result).toContain('Zoltán');
        expect(result).toContain('Eszter');
        expect(result).toHaveLength(2);
        expect(typeof result[0]).toBe('string');
    });

    it('Task 2: applyDevBonus should give 10% to Developers only', () => {
        const updated = applyDevBonus(employees);
        const aniko = updated.find(e => e.name === "Anikó");
        const gergo = updated.find(e => e.name === "Gergő");

        expect(aniko.salary).toBe(990000); // 900k + 10%
        expect(gergo.salary).toBe(750000); // No change for Designers
    });

    it('Task 2: applyDevBonus should NOT mutate the original array', () => {
        const originalSalary = employees[0].salary;
        applyDevBonus(employees);
        expect(employees[0].salary).toBe(originalSalary);
    });

    it('Task 3: calculateActivePayroll should only sum active employees', () => {
        const total = calculateActivePayroll(employees);
        expect(total).toBe(3700000);
    });
});
