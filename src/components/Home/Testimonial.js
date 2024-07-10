import Slider from "react-slick";

const Testimonial = () => {
	const testimonialData = [
		{
			id:1,
			img:'assets/img/testimonial/testi-1.jpg',
			name:'Justin Case',
			title:'@justin',
			desc:'Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory excuse my French up the duff cup of char bender fantastic arse.'
		},
		{
			id:2,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Gunther Beard',
			title:'@beard',
			desc:'Loo crikey bubble and sque wind up zonked arg bargy pukka nancy boy grub bog no biggie he nicked it what a load of rubbish pear shaped.!'
		},
		{
			id:3,
			img:'assets/img/testimonial/testi-3.jpg',
			name:'Joss Sticks',
			title:'@sticks',
			desc:'Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory excuse my French up the duff cup of char bender fantastic arse.'
		},
		{
			id:4,
			img:'assets/img/testimonial/testi-4.jpg',
			name:'Samuel Serif',
			title:'@justin',
			desc:'Loo crikey bubble and sque wind up zonked arg bargy pukka nancy boy grub bog no biggie he nicked it what a load of rubbish pear shaped.!'
		},
		{
			id:5,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Shahnewaz Sakil',
			title:'@Shahnewaz',
			desc:'Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory excuse my French up the duff cup of char bender fantastic arse.'
		},
		{
			id:6,
			img:'assets/img/testimonial/testi-3.jpg',
			name:'Joss Sticks',
			title:'@sticks',
			desc:'Loo crikey bubble and sque wind up zonked arg bargy pukka nancy boy grub bog no biggie he nicked it what a load of rubbish pear shaped.!'
		},
		{
			id:7,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Gunther Beard',
			title:'@beard',
			desc:'Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory excuse my French up the duff cup of char bender fantastic arse.'
		},
		{
			id:8,
			img:'assets/img/testimonial/testi-4.jpg',
			name:'Samuel Serif',
			title:'@justin',
			desc:'Loo crikey bubble and sque wind up zonked arg bargy pukka nancy boy grub bog no biggie he nicked it what a load of rubbish pear shaped.!'
		},
		{
			id:9,
			img:'assets/img/testimonial/testi-1.jpg',
			name:'Gunther Beard',
			title:'@beard',
			desc:'Tomfoolery chimney pot loo easy peasy twit he lost his bottle lavatory excuse my French up the duff cup of char bender fantastic arse.'
		},
	]
	// slick setting
	const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           }
         },
         {
           breakpoint: 767,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             initialSlide: 2
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    };
	return (
		<>
			<div className="testimonial__area pt-50 pb-115 fix">
				<div className="container">
					<div className="testimonial__inner p-relative pb-110">
						<div className="testimonial__bg p-absolute">
							<img src="assets/img/bg/testimonial-bg.png" alt="" />
						</div>
						<div className="row">
							<div className="col-xxl-12">
								<Slider {...settings} className="testimonial__slider wow fadeInUp" data-wow-delay=".5s">
									{
										testimonialData.map((testimonial,index) => {
											return <div key={index} className="testimonial__item white-bg">
											<div className="testimonial__person d-flex mb-20">
												<div className="testimonial__avater">
													<img src={testimonial.img} alt="" />
												</div>
												<div className="testimonial__info ml-15">
													<h5>{testimonial.name}</h5>
													<span>{testimonial.title}</span>
												</div>
											</div>
											<div className="testimonial__text">
												<p>{testimonial.desc}</p>
											</div>
										</div>
										})
									}
								</Slider>
						
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;