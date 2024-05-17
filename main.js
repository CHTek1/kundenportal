// Debug
//alert("Hello FROM chtek git");
//alert($().jquery);
/*

let copyrightFooter = document.querySelector('footer.bg-white > section:nth-child(1)');
copyrightFooter.innerHTML = '<span href="https://invoice.chtek.de" target="_blank" class="text-xs md:text-sm text-gray-700">Copyright © 2024 <a class="text-primary hover:underline" href="https://invoice.chtek.de" target="_blank">CHTek</a>. </span>'
*/

// jQuery 

// Clone Nav Item 
$clonedEl = $("#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.h-0.flex-1.flex.flex-col.overflow-y-auto.z-0.border-r > nav > a:nth-child(10)").clone();

//Change Nav Item Text
$clonedEl.children()[1].innerHTML = "Ticket System"
//Change Nav Item Link href
$clonedEl.attr({
	href: "https://chtek.de/",
	target: "_blank"
  });
  
//Write to Nav
$clonedEl.appendTo( "#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.h-0.flex-1.flex.flex-col.overflow-y-auto.z-0.border-r > nav");

