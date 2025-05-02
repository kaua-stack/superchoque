// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Loading Screen Animation
    const loadingScreen = document.querySelector(".loading-screen")
    const energyBar = document.querySelector(".energy-bar")
    const contentWrapper = document.querySelector(".content-wrapper")
    const introAnimation = document.querySelector(".intro-animation")
    const introLogo = document.querySelector(".intro-logo")
    const skipIntro = document.querySelector(".skip-intro")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    // Simulate loading
    setTimeout(() => {
      energyBar.style.width = "100%"
    }, 500)
  
    setTimeout(() => {
      loadingScreen.style.opacity = "0"
      setTimeout(() => {
        loadingScreen.style.display = "none"
        startIntro()
      }, 500)
    }, 2500)
  
    // Start intro animation
    function startIntro() {
      introAnimation.style.opacity = "1"
      introAnimation.style.pointerEvents = "auto"
  
      setTimeout(() => {
        introLogo.style.opacity = "1"
        introLogo.style.transform = "scale(1)"
        skipIntro.style.opacity = "1"
  
        // Create lightning effect
        createLightningEffect()
      }, 500)
  
      // Skip intro button
      skipIntro.addEventListener("click", endIntro)
  
      // Auto skip after 5 seconds
      setTimeout(endIntro, 5000)
    }
  
    // End intro animation
    function endIntro() {
      introAnimation.style.opacity = "0"
      setTimeout(() => {
        introAnimation.style.display = "none"
        contentWrapper.style.opacity = "1"
  
        // Initialize all animations and interactions
        initializeAnimations()
      }, 500)
    }
  
    // Create lightning effect for intro
    function createLightningEffect() {
      const lightningEffect = document.querySelector(".lightning-effect")
  
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const lightning = document.createElement("div")
          lightning.classList.add("lightning")
  
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const angle = Math.random() * 360
          const length = 30 + Math.random() * 70
  
          lightning.style.top = `${startY}%`
          lightning.style.left = `${startX}%`
          lightning.style.width = `${length}px`
          lightning.style.transform = `rotate(${angle}deg)`
          lightning.style.opacity = "0.7"
          lightning.style.position = "absolute"
          lightning.style.height = "3px"
          lightning.style.backgroundColor = "#00ccff"
          lightning.style.boxShadow = "0 0 10px #00ccff, 0 0 20px #00ccff"
          lightning.style.borderRadius = "3px"
  
          lightningEffect.appendChild(lightning)
  
          setTimeout(() => {
            lightning.style.opacity = "0"
            setTimeout(() => {
              lightningEffect.removeChild(lightning)
            }, 100)
          }, 100)
        }, i * 200)
      }
    }
  
    // Initialize all animations and interactions
    function initializeAnimations() {
      // Custom cursor
      document.addEventListener("mousemove", (e) => {
        cursorFollower.style.opacity = "1"
        cursorFollower.style.left = `${e.clientX}px`
        cursorFollower.style.top = `${e.clientY}px`
      })
  
      // Header scroll effect
      const header = document.querySelector("header")
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
      })
  
      // Theme toggle
      const themeToggle = document.querySelector(".theme-toggle")
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode")
      })
  
      // Parallax effect for hero section
      const parallaxBg = document.querySelector(".parallax-bg")
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY
        parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`
      })
  
      // Character tabs
      const tabButtons = document.querySelectorAll(".tab-button")
      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons and contents
          tabButtons.forEach((btn) => btn.classList.remove("active"))
          document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))
  
          // Add active class to clicked button and corresponding content
          button.classList.add("active")
          const tabId = button.getAttribute("data-tab")
          document.getElementById(tabId).classList.add("active")
        })
      })
  
      // Gallery slider
      const galleryWrapper = document.querySelector(".gallery-wrapper")
      const galleryItems = document.querySelectorAll(".gallery-item")
      const prevButton = document.querySelector(".gallery-prev")
      const nextButton = document.querySelector(".gallery-next")
  
      let currentIndex = 0
  
      function updateGallery() {
        const itemWidth = galleryItems[0].offsetWidth
        galleryWrapper.scrollLeft = currentIndex * itemWidth
      }
  
      prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--
          updateGallery()
        }
      })
  
      nextButton.addEventListener("click", () => {
        if (currentIndex < galleryItems.length - 1) {
          currentIndex++
          updateGallery()
        }
      })
  
      // Audio player
      const playTheme = document.querySelector(".play-theme")
      const themeAudio = document.getElementById("theme-song")
  
      playTheme.addEventListener("click", () => {
        if (themeAudio.paused) {
          themeAudio.play()
          playTheme.classList.add("playing")
        } else {
          themeAudio.pause()
          playTheme.classList.remove("playing")
        }
      })
  
      // Animate elements on scroll
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(".power-card, .fact-card, .timeline-item, .character-card")
  
        elements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top
          const elementBottom = element.getBoundingClientRect().bottom
          const windowHeight = window.innerHeight
  
          if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
            element.classList.add("animate")
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
            element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
          }
        })
      }
  
      // Set initial state for animated elements
      const elementsToAnimate = document.querySelectorAll(".power-card, .fact-card, .timeline-item, .character-card")
      elementsToAnimate.forEach((element) => {
        element.style.opacity = "0"
        element.style.transform = "translateY(30px)"
      })
  
      // Run animation on scroll
      window.addEventListener("scroll", animateOnScroll)
      animateOnScroll() // Run once on load
  
      // Form electricity effect
      const formInputs = document.querySelectorAll(".form-group input, .form-group textarea")
      formInputs.forEach((input) => {
        input.addEventListener("focus", () => {
          const electricity = input.nextElementSibling
          electricity.style.width = "100%"
        })
  
        input.addEventListener("blur", () => {
          const electricity = input.nextElementSibling
          electricity.style.width = "0"
        })
      })
  
      // Form submission
      const contactForm = document.querySelector(".contact-form")
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulate form submission
        const submitButton = contactForm.querySelector(".submit-button")
        const originalText = submitButton.innerHTML
  
        submitButton.innerHTML = "<span>Enviando...</span>"
        submitButton.disabled = true
  
        setTimeout(() => {
          alert("Mensagem enviada com sucesso! Obrigado por compartilhar sua nostalgia do Super Choque!")
          contactForm.reset()
          submitButton.innerHTML = originalText
          submitButton.disabled = false
        }, 1500)
      })
  
      // Button electricity effect
      const buttons = document.querySelectorAll(".cta-button, .submit-button")
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          const electricity = button.querySelector(".button-electricity")
          if (electricity) {
            electricity.style.opacity = "1"
          }
        })
  
        button.addEventListener("mouseleave", () => {
          const electricity = button.querySelector(".button-electricity")
          if (electricity) {
            electricity.style.opacity = "0"
          }
        })
      })
    }
  })
  