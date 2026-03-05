import {DateTime} from 'luxon';

// Converts a local date input (YYYY-MM-DD) to an ISO string in UTC, accounting for the local timezone offset.
export const localDateInputToISO = (dateInput?: string): string | null =>
{
    if (!dateInput)
        return null;
    const dt = DateTime.fromISO(dateInput, {zone: 'local'}).startOf('day');
    return dt.isValid ? dt.toISO(): null;
};

export const formatISOToLocal = (iso?: string): string =>
{
    if (!iso)
        return '';
    const dt = DateTime.fromISO(iso).setZone('local');
    return dt.isValid ? dt.toLocaleString(DateTime.DATE_SHORT) : ''; //Could potentially use this to make the date format user configurable instead of just using DATE_SHORT
}