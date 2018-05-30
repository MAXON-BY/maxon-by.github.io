<?php
/*
Template Name: Blog Page
*/
?>

<?php
get_header();
?>

    <!--Header Another Page-->
    <header class="header another-page header-bg-blog">
        <div class="container">

            <!-- Top line-->
            <div class="header__topline">

                <!--Header-logo-->
                <div class="header__logo">
                    <img src="<?php echo get_stylesheet_directory_uri() ?>/img/cakes_logo_white.png" alt="Custom Cakes">
                </div>

                <!-- Desctop NAV-->
                <div class="header__nav">
                    <img class="close-menu" src="<?php echo get_stylesheet_directory_uri() ?>/img/close.png" alt="">

                    <?php wp_nav_menu(array(
                        'menu' => 'Header menu', // �������� ����
                        'container' => 'nav', // ��������� ��� ����, �� ��������� 'div', � ����� ������ ������ 'nav', ������ ������ - ��� ����������
                        'container_class' => '', // ����� ��� ����������
                        'container_id' => '', // id ��� ����������
                        'menu_class' => '', // ����� ��� ����
                        'menu_id' => 'header-menu', // id ��� ����
                    ));
                    ?>

                </div>

                <!-- Dop menu-->
                <div class="header__dopnav">
                    <div class="phone">
                        <p><a href="tel:+14076835065">407-683-5065</a> Call Us!</p>
                    </div>
                    <div class="espanol">
                        <a href="<?php echo esc_url( get_permalink(68) ); ?>">¡Hablamos Español!</a>
                    </div>
                </div>

                <!-- Mobile btn Menu-->
                <div class="mob-btn">
                    <img class="open-menu" src="<?php echo get_stylesheet_directory_uri() ?>/img/menu.png" alt="">
                </div>
            </div>

            <!-- Header Main-->
            <div class="header__main">
                <div class="header__main-block">
                    <h1 class="h1">Our Blog</h1>
                </div>
            </div>

        </div>
    </header>

    <!--   ~~~~~~    START CONTENT    ~~~~~     -->
    <div class="content">

    <!-- Blogs-->
    <section class="blog">
        <div class="container">

            <div class="blog-wrap">
                <!-- Last Posts-->
                <div class="blog-wrap-last-news" style="background-image: url('<?php echo get_the_post_thumbnail($page->ID, array(600,300)); ?>')">
                    <?php query_posts(array('paged'=>get_query_var('paged'), 'posts_per_page'=>'4' ) ); ?>
                    <?php if (have_posts()) : ?>
                        <?php while (have_posts()) : the_post(); ?>
                            <div class="last-news-block">
                                <!-- Img-->
                                <div class="last-news-block-img">
                                    <?php echo get_the_post_thumbnail( $page->ID); ?>
                                </div>
                                <!-- Text-->
                                <div class="last-news-block-txt">
                                    <div class="last-news-block-title">
                                        <p class="date"><?php the_time('d.m.Y'); ?></p>
                                        <h3 class="h3"><?php the_title() ?></h3>
                                    </div>
                                    <div class="last-news-block-about">
                                        <p><?php the_content() ?></p>

                                        <div class="link-block">
                                            <a class="link-read" href="<?php the_permalink(); ?>">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; endif; ?>

                    <div class="pagination-block">
                        <?php wp_pagenavi(); ?>
                    </div>

                </div>
            </div>


        </div>
    </section>

    <!-- Call US-->
<?php get_template_part( 'template-parts/callus-section','page' ); ?>


<?php
get_footer();
