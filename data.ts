import {RiComputerLine} from 'react-icons/ri';
import {FaServer} from 'react-icons/fa'
import {Project, Service} from './type'
import {AiOutlineApi} from 'react-icons/ai'
import {School} from './type';

export const services:Service[] =[
    {
        title: 'Frontend Developer',
        about : 'Building frontend webapp like SPA using React, NextJS and tailwindcss ',
        Icon : RiComputerLine
    },
    {
        title: 'Backend Developer',
        about : 'Managing backend, database, APIs using ExpressJS and ASP.NET(learning)',
        Icon :FaServer
    },
    {
        title: 'API Development',
        about : 'Building fast scaleable API that serves everywhere using NEXTJS, Express ',
        Icon :AiOutlineApi
    },
    
]


export const schools: School[]  =[
    {
        name: 'American Internation University-Bangladesh',
        degree: 'Bsc In CSE',
        graduation:'Classes of 2024'
    },
    {
        name: 'Dr Mahbubur Rahman Mollah College',
        degree: 'Science',
        graduation:'HSC 2019'
    },
    {
        name: 'Motijheel Goverment Boys High School',
        degree: 'Science',
        graduation:'SSC 2017'
    },

]

export const projects: Project[]= [
    {
        name: "CGPA Calculator BD",
        description: "This app used to calculate CGPA of universites in Bangladesh",
        image_path: '/img/cgpa_calc.png',
        deployed_url: 'https://www.getcgpa.lithaxor.tech/',
        github_url: 'https://github.com/LitHaxor/CGPA-Calculator-Bangladesh',
        categories: ['react'],
        key_techs: ["react","chartJS", "Bootstrap"]
    },
    
    {
        name: "CGPA Calculator BD",
        description: "This app used to calculate CGPA of universites in Bangladesh",
        image_path: '/img/cgpa_calc.png',
        deployed_url: 'https://www.getcgpa.lithaxor.tech/',
        github_url: 'https://github.com/LitHaxor/CGPA-Calculator-Bangladesh',
        categories: ['react'],
        key_techs: ["react","chartJS", "Bootstrap"]
    },
    {
        name: "CGPA Calculator BD",
        description: "This app used to calculate CGPA of universites in Bangladesh",
        image_path: '/img/cgpa_calc.png',
        deployed_url: 'https://www.getcgpa.lithaxor.tech/',
        github_url: 'https://github.com/LitHaxor/CGPA-Calculator-Bangladesh',
        categories: ['react'],
        key_techs: ["react","chartJS", "Bootstrap"]
    },
    {
        name: "CGPA Calculator BD",
        description: "This app used to calculate CGPA of universites in Bangladesh",
        image_path: '/img/cgpa_calc.png',
        deployed_url: 'https://www.getcgpa.lithaxor.tech/',
        github_url: 'https://github.com/LitHaxor/CGPA-Calculator-Bangladesh',
        categories: ['react','nextjs'],
        key_techs: ["react","chartJS", "Bootstrap"]
    },
    {
        name: "CGPA Calculator BD",
        description: "This app used to calculate CGPA of universites in Bangladesh",
        image_path: '/img/cgpa_calc.png',
        deployed_url: 'https://www.getcgpa.lithaxor.tech/',
        github_url: 'https://github.com/LitHaxor/CGPA-Calculator-Bangladesh',
        categories: ['react'],
        key_techs: ["react","chartJS", "Bootstrap"]
    },
]