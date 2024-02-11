<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="author" content="www.frebsite.nl" />
    <meta name="viewport" content="width=device-width minimum-scale=1.0 maximum-scale=1.0 user-scalable=no" />

    <title>Business</title>
    <link type="text/css" rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assist/css/demo.css" />
    <link type="text/css" rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assist/css/mmenu.css" />
    <link href="<?php echo get_template_directory_uri();?>/assist/css/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assist/css/bootstrap.min.css">
    <link rel="stylesheet"
        href="<?php echo get_template_directory_uri();?>/assist/fontawesome-free-6.4.0-web/css/all.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assist/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assist/css/style.css">
    <link rel="icon" href="<?php echo get_template_directory_uri();?>/assist/image/home/logo.png">
</head>

<!-- mobile menu bar start -->
<nav id="menu">
    <ul>
        <li><a href="index.html" style="color: aquamarine;">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
<!-- mobile menu bar end -->
<div class="page">
<header>
    <!-- top header sention start -->
    <div class="top-header bg-primary" id="home">
        <div class="container d-flex justify-content-between ">
            <div class="t-h-l-box ">
                <a href="http://facebook.com"><i class="fa-brands fa-facebook-f fa-2xs"></i></a>
                <a href="#"><i class="fa-brands fa-google-plus-g fa-2xs"></i></a>
                <a href="#"><i class="fa-brands fa-twitter fa-2xs"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in fa-2xs"></i></a>
            </div>
            <div class="t-h-r-box">
                <a href="mailto:akashnazmul648@mailgmail.com?subject=Hello%20World"><i
                        class="fa-solid fa-envelope fa-xs"></i> <span>alitstudios@gmail.com</span></a>
                <a href="tel:+8801880258655"><i class="fa-solid fa-phone fa-2xs"></i>
                    <span>(123)45678910</span></a>
            </div>
        </div>
    </div>
    <!-- top header sention End -->
    <!-- desktop menu bar start -->
    <div class="navbar navbar-expand-lg ">
        <div class="container">
            <a class="navbar-brand" href="<?php echo get_template_directory_uri();?>/index.html"><img
                    src="<?php echo get_template_directory_uri();?>/assist/image/home/logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <a href="#menu">
                    <div class="nav_icon"></div>
                </a>
            </button>
            <div class="collapse navbar-collapse des-navbar" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="des_nav">
                    <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="<?php echo get_template_directory_uri();?>/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo get_template_directory_uri();?>/about.html">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo get_template_directory_uri();?>/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo get_template_directory_uri();?>/blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo get_template_directory_uri();?>/contact.html">Contact</a>
                    </li>
                    <li class="nav-item" id="small_srch">
                        <a class="nav-link"><i class="fa-solid fa-magnifying-glass fa-xs"></i></a>
                    </li>
                    <li class="nav-item">
                        <div id="large_srch">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-dark" type="submit">Search</button>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- desktop menu bar end -->
</header>
</div>
