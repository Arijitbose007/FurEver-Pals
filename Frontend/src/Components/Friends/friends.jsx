import React from 'react';
//import { Link } from 'react-router-dom';
import './friends.css';

const Friends = () => {
    return (
        <section>
           <div class="heading" id="adopt">
			<h1 class="meet-heading">Meet our Friends Here</h1>
		</div>

		<section class="pet-card-flex">
			<div class="one-line-card">
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/goldern-ret.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Bongo
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/dog-icon.svg"
										alt=""
									/>
									<span>Dog</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>8 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Male</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>G-Retriever</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Brown</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Delhi</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img class="card-img-size" src="./Images/pug.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Roblet
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/dog-icon.svg"
										alt=""
									/>
									<span>Dog</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>8 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Male</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Pug</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Brown</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Lucknow</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="one-line-card">
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/husky.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Sipper
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/dog-icon.svg"
										alt=""
									/>
									<span>Dog</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>7 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Male</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Husky</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Brown</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Kashmir</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/ragdo.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Russia
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/cat.png"
										alt=""
									/>
									<span>Cat</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>2.5 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Female</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Ragdoll</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>White</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Karnataka</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="one-line-card">
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/persian.webp"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Zombo
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/cat.png"
										alt=""
									/>
									<span>Cat</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>1.5 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Female</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Persian</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>White</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Kanpur</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/angora.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Riksy
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/rabbit.png"
										alt=""
									/>
									<span>Rabbit</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>0.5 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Female</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Angora</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>White</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Kashmir</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="one-line-card">
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg max-w-xs card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/german.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Sheru
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/dog-icon.svg"
										alt=""
									/>
									<span>Dog</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>5 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Male</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>G-Shepherd</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Black</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Kolkata</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button>
							</a>
						</div>
					</div>
				</div>
				<div class="main-card card-height">
					<div class="main-img">
						<div class="hv rounded-lg shadow-lg card-img-div">
							<a href="#">
								<img
									class="card-img-size"
									src="./Images/porme.jpg"
									alt=""
								/>
							</a>
						</div>
					</div>
					<div class="main-text">
						<div class="p-4 flex flex-col gap-2">
							<h5 class="text_3 md:text-[40px] font-bold mb-2 text-center">
								Swaggy
							</h5>
							<ul class="grid grid-cols-2 gap-5 text_4">
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/dog-icon.svg"
										alt=""
									/>
									<span>Dog</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>2 years</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Female</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>Pomeranian</span>
								</li>
								<li class="flex text-xl justify-self-center">
									<span>White</span>
								</li>
								<li class="flex gap-2 text-xl justify-self-center">
									<img
										class="w-5 icon h-auto"
										src="./Images/loation-icon.svg"
										alt=""
									/>
									<span>Kashmir</span>
								</li>
							</ul>
							<a class="self-center" href="adopt.html">
								<button type="button" class="btn">Adopt me</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        </section>
    );
};

export default Friends;
