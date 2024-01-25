-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 07. 13:37
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `kozossegioldal`
--
CREATE DATABASE IF NOT EXISTS `kozossegioldal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `kozossegioldal`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `posts`
--
-- Létrehozva: 2024. Jan 07. 12:22
-- Utolsó frissítés: 2024. Jan 07. 12:29
--

CREATE TABLE `posts` (
  `Id` char(36) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `Title` varchar(36) NOT NULL,
  `Likes` int(11) NOT NULL,
  `Content` text NOT NULL,
  `Image` varchar(40) NOT NULL,
  `CreatedTime` datetime NOT NULL,
  `UsersId` char(36) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `posts`
--

INSERT INTO `posts` (`Id`, `Title`, `Likes`, `Content`, `Image`, `CreatedTime`, `UsersId`) VALUES
('2cc203af-d1b1-4899-b2fb-794928a44008', 'Nyaralás', 100000, 'Megyek nyaralni a Quatro panzióba.', 'mintakep', '2024-01-07 13:29:18', 'a20bb762-7842-4e11-97d0-0dccad57da5d');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--
-- Létrehozva: 2024. Jan 07. 12:22
-- Utolsó frissítés: 2024. Jan 07. 12:28
--

CREATE TABLE `users` (
  `Id` char(36) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `UserName` varchar(36) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Email` varchar(15) NOT NULL,
  `DateOfBirth` datetime NOT NULL,
  `RegisterDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`Id`, `UserName`, `Name`, `Password`, `Gender`, `Email`, `DateOfBirth`, `RegisterDate`) VALUES
('a20bb762-7842-4e11-97d0-0dccad57da5d', 'Quatro', 'Quatro', 'Hehehe', 'male', 'feketel@kkszki.', '1997-01-07 12:27:39', '2024-01-07 13:28:23');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__efmigrationshistory`
--
-- Létrehozva: 2024. Jan 07. 12:22
-- Utolsó frissítés: 2024. Jan 07. 12:22
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20231214064820_CreateDb', '8.0.0'),
('20231215075417_Fix', '8.0.0'),
('20231215084036_HotFix', '8.0.0');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Posts_UsersId` (`UsersId`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_Posts_Users_UsersId` FOREIGN KEY (`UsersId`) REFERENCES `users` (`Id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
