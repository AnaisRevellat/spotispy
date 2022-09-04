import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

type Song = {
	id:number,
	title:string,
	artist:string,
	file:string,
	image:string
}

//1 array of objects
const SONGS: Song[] = [{
{
	id:0,
	title:'Birdseye Blues',
	artist: 'Chris Haugen',
	file: 'songs/Birdseye Blues - Chris Haugen.mp3',
	image: '/cover/1.jpg'
},
{
	id:0,
	title:'Depth Fuse',
	artist: 'French Fuse',
	file: 'songs/Depth Fuse - French Fuse.mp3',
	image: '/cover/2.jpg'
},
{
	id:0,
	title:'Duh Fuse',
	artist: 'French Fuse',
	file: 'songs/Duh Fuse - French Fuse.mp3',
	image: '/covers/3.jpg'
}
}]

export const getStaticProps = async() =>{  //simulation comme un useEffect
	const allSongs: Song[] = SONGS;
	return{
		props:{
			songs: allSongs
		},
		revalidate: 3600 //réinterroger la fake db ttes les 3600sec
	}
}

const Home: NextPage<{songs: Song[]}> = ({songs}) => {

	const [trackPlaying, setTrackPlaying] = useState<number>(0)
	const[isPlaying, setIsplaying] = useState<boolean>(false)


	return <div className={styles.container}></div>;
};

export default Home;
