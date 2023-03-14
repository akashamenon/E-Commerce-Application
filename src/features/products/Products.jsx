import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState,useEffect } from 'react';
import './Products.css';

export default function TitlebarBelowImageList() {
    const [itemData,setItemData] =useState([])
    const url = "https://jsonplaceholder.typicode.com/photos";
    useEffect(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            return Error("Oh no");
          }
          return res.json();
        })
        .then(data => setItemData(data));
    });
  return (
    
        <ImageList sx={{ width: '100%' }}>
      {itemData.filter((data)=>{return data.id<100}).map((item) => (
        <ImageListItem key={item.id}>
          <div className='size'>
            <img
            src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            // src={`${item.thumbnailUrl}`}
            // srcSet={`${item.thumbnailUrl}`}
            alt={item.title}
            loading="lazy"
            className='productImage'
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          /></div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
