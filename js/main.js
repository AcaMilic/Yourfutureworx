(() => {
	const mobileWidth = 856;

	const addMenuBackground = () => {
		const pageWidth = window.innerWidth;
		const boddyOffset = document.body.scrollTop || document.documentElement.scrollTop; 
		const navigation = document.querySelector("header nav");
		
		if(pageWidth > mobileWidth) {
			boddyOffset > 0 ? navigation.classList.add("ph-nav-fixed") : navigation.classList.remove("ph-nav-fixed")
		}
		
	}

	const reorderResponsiveMenu = () => {
		const pageWidth = window.innerWidth;
		const navContainer = document.querySelector("header nav .ph-container");
		const navigation = document.querySelector("header nav .ph-navigation");
		const mobileNavigation = document.querySelector("body > .ph-navigation");

		if (pageWidth <= mobileWidth && navigation) {
			document.body.insertAdjacentElement("afterbegin", navigation);
		} else if (pageWidth > mobileWidth && mobileNavigation) {
			navContainer.insertAdjacentElement("beforeend", mobileNavigation);
		}
		
	}

	const mobileMenuToggle = () => {
		const menuToggle = document.querySelector(".ph-nav-toggle");

		menuToggle.addEventListener("click", () =>{
			const mobileNavigation = document.querySelector("body > .ph-navigation");

		mobileNavigation.classList.toggle("ph-navigation-opened");

		})
	}

	const onNavItemClick = () => {
		const navItemList = document.querySelectorAll(".ph-section-link");
		const navItems = [...navItemList];
		navItems.forEach(item => {
			item.addEventListener("click", event => {
				event.preventDefault();
				const sectionId = event.target.getAttribute("href") || event.target.dataset.href;


				scrollToSection(sectionId);


			})
		})
	}

	const scrollToSection = sectionId => {
		let sectionPosition, sectionOffset;
		const navigationHeight = document.querySelector("header nav").offsetHeight;
		const pageWidth = window.innerWidth;

		if(sectionId !== "ph-vacanies") {
			sectionOffset = document.querySelector(sectionId).offsetTop;
			sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset; 
		} else {
			sectionPosition = 0;
		}

		window.scrollTo ({
			
			'behavior': 'smooth',
			'left': 0,
			'top': sectionPosition
		})

	}

	const onGalleryImageClick = () => {
		const galleryImageList = document.querySelectorAll("#ph-gallery li");
		const galleryImages = [...galleryImageList];

		galleryImages.forEach(image => {
			image.addEventListener("click", event => {
				galleryImageOpen(event.target);
			})
		})

	}
	
	const galleryImageOpen = image => {
		const imageSrc = image.getAttribute("src");
		const openedImage = `<div class='ph-backdrop'><div onclick='prev('${imageSrc}')' class='left'>&#60;</div><img src='${imageSrc}' alt='' /><div onclick='next("${imageSrc}")' class='right'>&#62;</div>
		                    <span class="ph-backdrop-close">X</span></div>`;

		document.body.insertAdjacentHTML("beforeend", openedImage);
		galleryImagesClose();

	}

	const galleryImagesClose = () => {
		const closeButton = document.querySelector(".ph-backdrop-close");

		closeButton.addEventListener("click", () => {
			const backdrop = document.querySelector(".ph-backdrop");
			backdrop.remove();
		})
	}

	window.addEventListener("scroll", () => {
		addMenuBackground();
	})

	window.addEventListener("resize", () => {
		reorderResponsiveMenu();
	})




	reorderResponsiveMenu();
	mobileMenuToggle();
	onNavItemClick();
	onGalleryImageClick();

})();

