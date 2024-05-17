// Debug
//alert("Hello FROM chtek git");
//alert($().jquery);
/*

let copyrightFooter = document.querySelector('footer.bg-white > section:nth-child(1)');
copyrightFooter.innerHTML = '<span href="https://invoice.chtek.de" target="_blank" class="text-xs md:text-sm text-gray-700">Copyright © 2024 <a class="text-primary hover:underline" href="https://invoice.chtek.de" target="_blank">CHTek</a>. </span>'
*/

// jQuery //

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

// Footer update
$footerCopy = $("#main-sidebar > div.flex.flex-col.w-0.flex-1.overflow-hidden > footer > section > span")

// Update Link on span
$footerCopy.attr({href: "https://chtek.de/"})

// Update Link on a
$footerCopy.children('a').attr({href: "https://chtek.de/"})

// Update Link on a
$footerCopy.children('a').text("CHTek")

//Fix Logo img url
$logoImg = $("#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.flex.items-center.h-16.flex-shrink-0.px-4.bg-white.border-r.justify-center.z-10 > a > img")
$logoImg.attr({src: "https://invoice.chtek.de/storage/mBeMq8OvbltEoAWdTkuIxEU1yCh9b3zm/30Patmd4KbVkjirkdIUqD38EOq60fjHpQSJTwmV3.png"})

