//defining components 

// Header Component
class MySidebar extends HTMLElement {
    connecttedCallback() {
        this.innerHTML = `
        <aside class="sidebar">

        <!-- sidebar header -->
        <div class="sidebar__header">

            <!-- sidebar header icon -->
            <div class="sidebar__header__icon-img">
                <img src="assets/images/lms-icon.png">
            </div>

            <!-- sidebar header text -->
            <div class="sidebar__header__icon-text">
                <span>LMS</span>
                <span>Learning Management System</span>
            </div>

            <!-- sidebar header toggle -->
            <div class="sidebar__header__toggle">
                <i class="fa-solid fa-angle-left"></i>
            </div>
        </div>


        <!-- sidebar body -->
        <div class="sidebar__body">

            <ul class="sidebar__body__menu">
                <!-- sidebar menu label -->
                <span class="sidebar__body__menu__menu-label">General</span>
                <li>
                    <a href="#">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-star"></i>
                        <span>Scoreboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="sidebar__body__menu__btn sidebar__body__menu__elearning-btn">
                        <i class="fa-solid fa-book"></i>
                        <span>E-Learning <i class="fa-solid fa-angle-down"></i></span>
                    </a>
                </li>

                <ul class="sidebar__body__sub-menu elearning-sub-menu">
                    <!-- sidebar side menu outer border -->
                    <div class="border">
                        <li>
                            <a href="">
                                <span>Quizzes</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>Assignments</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>Materials</span>
                            </a>
                        </li>
                    </div>
                </ul>

                <li>
                    <a href="#" class="sidebar__body__menu__btn sidebar__body__menu__semesterwork-btn">
                        <i class="fa-solid fa-chart-simple"></i>
                        <span>Semester Work <i class="fa-solid fa-angle-down"></i></span>
                    </a>
                </li>

                <ul class="sidebar__body__sub-menu semesterwork-sub-menu">
                    <!-- sidebar side menu outer border -->
                    <div class="border">
                        <li>
                            <a href="">
                                <span>schedule</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>Grades book</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>Absence</span>
                            </a>
                        </li>
                    </div>
                </ul>
            </ul>

        </div>
    </aside>

    <div class="activity-center"></div>
        `
    }
}


// exporting components
// customElements.define('Tag_name', CLass_name) 

// header
customElements.define('my-sidebar', MySidebar)

// com
// customElements.define('component', Component) 