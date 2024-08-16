import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
const BlogCard = ({blog, deletable,handleDelete}) => {
    const {cover_image,title,description,published_at,id}=blog
    
    return (
        <div className='flex relative '>
        <Link 
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 hover:border-secondary hover:border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
    {deletable && (<div 
    onClick={() => handleDelete(blog.id)}
    className='bg-primary cursor-pointer p-3 ml-5
    hover:bg-secondary rounded-full hover:scale-105 absolute -top-5 -right-5'>
        <MdDeleteForever 
    size={20} className='text-secondary hover:text-primary'/></div>)}
    </div>
    );
};

export default BlogCard;