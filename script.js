const reveal = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');reveal.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.project,.role,.about-card').forEach(el=>{el.style.opacity=0;el.style.transform='translateY(18px)';el.style.transition='opacity .7s ease, transform .7s ease';reveal.observe(el)});
document.addEventListener('scroll',()=>document.querySelectorAll('.in').forEach(el=>{el.style.opacity=1;el.style.transform='translateY(0)'}),{passive:true});
window.addEventListener('load',()=>document.querySelectorAll('.project,.role,.about-card').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight){el.classList.add('in');el.style.opacity=1;el.style.transform='translateY(0)'}}));
