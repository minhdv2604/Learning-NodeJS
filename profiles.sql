-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2019 at 12:10 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express`
--

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` longtext COLLATE utf8mb4_unicode_ci,
  `tagline` text COLLATE utf8mb4_unicode_ci,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imgSrc` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `firstname`, `lastname`, `bio`, `tagline`, `twitter`, `imgSrc`) VALUES
(1, 'Tom', 'Jagger', 'Lorem ipsum dolor sit amet, oratio feugiat sed te, hinc ancillae cum ut. Ad explicari argumentum duo. Sea dicant iriure utroque ei, in duo meis solet. Eum id reque legendos prodesset, his ad solet ceteros. At pri duis recusabo ocurreret, saepe fabellas sed ad, at iudico constituam mel. \r\n\r\n Id zril intellegat efficiendi sed, at vel eros vidit. Modus signiferumque ex his, dicant consulatu definitionem ea has. Qui at ubique debitis, cu eripuit inciderint nam. Sit ei admodum interesset mediocritatem. Prima quando suavitate vel an, illum scaevola efficiendi vim ne.', 'Developer, Writer and Speaker', 'https://twitter.com', 'tom-jagger.jpg'),
(2, 'Sarah', 'You', 'Lorem ipsum dolor sit amet, oratio feugiat sed te, hinc ancillae cum ut. Ad explicari argumentum duo. Sea dicant iriure utroque ei, in duo meis solet. Eum id reque legendos prodesset, his ad solet ceteros. At pri duis recusabo ocurreret, saepe fabellas sed ad, at iudico constituam mel. \r\n\r\n Id zril intellegat efficiendi sed, at vel eros vidit. Modus signiferumque ex his, dicant consulatu definitionem ea has. Qui at ubique debitis, cu eripuit inciderint nam. Sit ei admodum interesset mediocritatem. Prima quando suavitate vel an, illum scaevola efficiendi vim ne.', 'UX/UI Designer', 'https://twitter.com', 'sarah-you.jpg'),
(3, 'Caroline', 'Green', 'Lorem ipsum dolor sit amet, oratio feugiat sed te, hinc ancillae cum ut. Ad explicari argumentum duo. Sea dicant iriure utroque ei, in duo meis solet. Eum id reque legendos prodesset, his ad solet ceteros. At pri duis recusabo ocurreret, saepe fabellas sed ad, at iudico constituam mel. \r\n\r\n Id zril intellegat efficiendi sed, at vel eros vidit. Modus signiferumque ex his, dicant consulatu definitionem ea has. Qui at ubique debitis, cu eripuit inciderint nam. Sit ei admodum interesset mediocritatem. Prima quando suavitate vel an, illum scaevola efficiendi vim ne.', 'Consultant and Photographer', 'https://twitter.com', 'caroline-green.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
