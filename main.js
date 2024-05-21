// Debug
//alert("Hello FROM chtek git");
//alert($().jquery);
/*

let copyrightFooter = document.querySelector('footer.bg-white > section:nth-child(1)');
copyrightFooter.innerHTML = '<span href="https://invoice.chtek.de" target="_blank" class="text-xs md:text-sm text-gray-700">Copyright © 2024 <a class="text-primary hover:underline" href="https://invoice.chtek.de" target="_blank">CHTek</a>. </span>'
*/

// jQuery Wait//
var waitForJQuery = setInterval(function() {
    if (typeof $ != 'undefined') {

        // jQuery Exec //


        $(document).ready(function() {

            // Load Icons
            let supportIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGcgaWQ9Imljb21vb24taWdub3JlIj4NCjwvZz4NCjxwYXRoIGQ9Ik0xNiAzLjIwNWMtNy4wNjYgMC0xMi43OTUgNS43MjgtMTIuNzk1IDEyLjc5NXM1LjcyOSAxMi43OTQgMTIuNzk1IDEyLjc5NWM3LjA2Ny0wLjAwMSAxMi43OTUtNS43MjkgMTIuNzk1LTEyLjc5NXMtNS43MjktMTIuNzk1LTEyLjc5NS0xMi43OTV6TTE1Ljk5OSAyMS44NjRjLTMuMjMzIDAtNS44NjMtMi42MzEtNS44NjMtNS44NjRzMi42MzEtNS44NjQgNS44NjQtNS44NjRoMC4wMDFjMy4yMzMgMCA1Ljg2MyAyLjYzMSA1Ljg2MyA1Ljg2NHMtMi42MzEgNS44NjQtNS44NjUgNS44NjR6TTIyLjM5NSAxMy4zMjdsNC4wMjgtMi42OTNjMC44MzIgMS42MDkgMS4zMDUgMy40MzMgMS4zMDUgNS4zNjYgMCAxLjkwOS0wLjQ2MSAzLjcxLTEuMjczIDUuMzA1bC00LjAzNS0yLjY5OWMwLjMyNy0wLjgwNSAwLjUxMS0xLjY4MyAwLjUxMS0yLjYwNiAwLTAuOTQ4LTAuMTkxLTEuODUtMC41MzUtMi42NzN6TTI1Ljg5IDkuNzA4bC0zLjk5IDIuNjY4Yy0wLjU4LTAuOTQyLTEuMzc3LTEuNzMzLTIuMzI1LTIuMzA1bDIuNjY5LTMuOTkxYzEuNDY2IDAuOTI2IDIuNzEyIDIuMTY3IDMuNjQ1IDMuNjI5ek0yMS4zMTYgNS41NWwtMi42OTggNC4wMzRjLTAuODA4LTAuMzMtMS42OS0wLjUxNS0yLjYxNy0wLjUxNWgtMC4wMDFjLTAuOTI3IDAtMS44MDkgMC4xODUtMi42MTcgMC41MTVsLTIuNjk4LTQuMDM0YzEuNTk3LTAuODE2IDMuNDAyLTEuMjc5IDUuMzE1LTEuMjc5czMuNzE5IDAuNDYzIDUuMzE2IDEuMjc5ek05Ljc1NiA2LjA3OGwyLjY3IDMuOTkyYy0wLjk1IDAuNTc0LTEuNzQ4IDEuMzY3LTIuMzI5IDIuMzExbC0zLjk5MS0yLjY2OWMwLjkzNC0xLjQ2NCAyLjE4Mi0yLjcwNyAzLjY1LTMuNjM0ek01LjU3NCAxMC42MzlsNC4wMjkgMi42OTRjLTAuMzQzIDAuODIyLTAuNTMzIDEuNzIyLTAuNTMzIDIuNjY3IDAgMC45MiAwLjE4MyAxLjc5NyAwLjUwOSAyLjU5OWwtNC4wMzYgMi43Yy0wLjgxLTEuNTkzLTEuMjctMy4zOTMtMS4yNy01LjI5OSAwLTEuOTMxIDAuNDcyLTMuNzUzIDEuMzAzLTUuMzYxek02LjA2OSAyMi4yMjlsMy45OTItMi42NjljMC41NzYgMC45NTkgMS4zNzcgMS43NjYgMi4zMzEgMi4zNWwtMi42NjkgMy45OWMtMS40NzMtMC45MzctMi43MjQtMi4xOTMtMy42NTQtMy42NzF6TTEwLjY1IDI2LjQzMmwyLjY5NS00LjAzMGMwLjgxOCAwLjM0IDEuNzEzIDAuNTI5IDIuNjU0IDAuNTI5IDAuMDAxIDAgMC4wMDEgMCAwLjAwMSAwIDAuOTQxIDAgMS44MzgtMC4xODkgMi42NTYtMC41MjlsMi42OTUgNC4wMzBjLTEuNjA2IDAuODI3LTMuNDI0IDEuMjk3LTUuMzUxIDEuMjk3cy0zLjc0NS0wLjQ3LTUuMzUtMS4yOTd6TTIyLjI3OCAyNS44OTlsLTIuNjY5LTMuOTkxYzAuOTUyLTAuNTgzIDEuNzUxLTEuMzg3IDIuMzI3LTIuMzQ0bDMuOTkyIDIuNjdjLTAuOTMgMS40NzUtMi4xNzkgMi43MjktMy42NSAzLjY2NXoiIGZpbGw9IiMwMDAwMDAiPg0KDQo8L3BhdGg+DQo8L3N2Zz4="

            // Clone Nav Item 
            $clonedEl = $("#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.h-0.flex-1.flex.flex-col.overflow-y-auto.z-0.border-r > nav > a:nth-child(10)").clone();

            //Change Nav Item Text
            $clonedEl.children()[1].innerHTML = "Ticket System"
            //Change Nav Item Link href
            $clonedEl.attr({
                href: "https://forms.office.com/e/E6s62GYTpp?origin=lprLink",
                target: "_blank"
            });
            $clonedEl.children('img').attr({
                src: supportIcon
            });

            // Remove Red BG if exist
            if ($($clonedEl).hasClass('bg-primary')) {
                $clonedEl.removeClass('bg-primary text-white')
            }

            //Hide Element
            $clonedEl.hide();

            //Write to Desktop Nav
            $tickeNavItemDesk = $clonedEl.appendTo("#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.h-0.flex-1.flex.flex-col.overflow-y-auto.z-0.border-r > nav");



            //Write (clone) to Mobile Nav
            $tickeNavItemMobile = $clonedEl.clone().appendTo("#main-sidebar > div.md\\:hidden > div.fixed.inset-y-0.left-0.flex.flex-col > div.mt-5.flex-1.h-0.overflow-y-auto > nav");

            //Fade in
            $tickeNavItemDesk.fadeIn( "slow" );

            //Fade in
            $tickeNavItemMobile.fadeIn( "slow" );

            // Footer update
            $footerCopy = $("#main-sidebar > div.flex.flex-col.w-0.flex-1.overflow-hidden > footer > section > span")

            // Update Link on span
            $footerCopy.attr({
                href: "https://chtek.de/"
            })

            // Update Link on a
            $footerCopy.children('a').attr({
                href: "https://chtek.de/"
            })

            // Update Link on a
            $footerCopy.children('a').text("CHTek")

            //Fix Logo img urls
            $logoImg = $("#main-sidebar > div.hidden.md\\:flex.md\\:flex-shrink-0 > div > div.flex.items-center.h-16.flex-shrink-0.px-4.bg-white.border-r.justify-center.z-10 > a > img")
            $logoImgMobile = $("#main-sidebar > div.md\\:hidden > div.fixed.inset-y-0.left-0.flex.flex-col > div.flex-shrink-0.flex.items-center.px-4 > img")
            $logoImgURL = "https://invoice.chtek.de/storage/mBeMq8OvbltEoAWdTkuIxEU1yCh9b3zm/30Patmd4KbVkjirkdIUqD38EOq60fjHpQSJTwmV3.png"
            $logoImg.attr({
                src: $logoImgURL
            })
            $logoImgMobile.attr({
                src: $logoImgURL
            })

        }); // jQuery END//

        clearInterval(waitForJQuery);
    }
}, 10);
