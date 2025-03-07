'use client'
import { useEffect, useState } from "react";
import { Response } from "@/types/http/people.response";
import { Person } from "@/types/person";
import axios from 'axios';

export const usePeopleApi = () => {
    const [currentPerson, setPerson] = useState<Person | null>(null);
    const [personHistory, setPersonHistory] = useState<Person[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setError(null);
        setLoading(true);

        try {
            const response = await axios.get<Response>('https://randomuser.me/api/');
            const data = response.data.results[0];
            const person: Person = {
                id: data.login.uuid,
                name: `${data.name.first} ${data.name.last}`,
                email: data.email,
                birthday: data.dob.date,
                age: data.dob.age,
                phone: data.phone,
                password: data.login.password,
                picture: data.picture.large
            }
            setPerson(person);
            setPersonHistory((personList) => [...personList, person]);
        } catch {
            setError('Failed to fetch user');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {currentPerson, personHistory, loading, error, fetchData}
}