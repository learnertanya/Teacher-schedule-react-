import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Grid,
  GridItem,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  AddIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import "../styles/ScheduleTable.css";

const ScheduleTable = ({ schedule }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate !== null) {
      const filteredSchedules = schedule.filter((item) => {
        let date = new Date(item.date).getDate();
        console.log(date);
        let month = new Date(item.date).getMonth();
        console.log(month);
        return date === selectedDate && month === selectedMonth;
      });
      setFilteredSchedule(filteredSchedules);
    } else {
      setFilteredSchedule([]);
    }
  }, [schedule, selectedDate, selectedMonth]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setFilteredSchedule([]);
  };

  const handlePrevMonth = () => {
    setSelectedMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setSelectedMonth((prevMonth) => prevMonth + 1);
  };

  const handleSignout = () => {
    navigate('/')
  }

  const getMonthName = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleCollapse = () => {
    setShowMore(false);
  };

  const renderCalendarDays = () => {
    const firstDayOfMonth = new Date(
      new Date().getFullYear(),
      selectedMonth,
      1
    ).getDay();
    const totalDaysInMonth = new Date(
      new Date().getFullYear(),
      selectedMonth + 1,
      0
    ).getDate();
    const calendarDays = [];

    // Fill the beginning of the calendar with empty days
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<GridItem key={`empty-${i}`} />);
    }

    // Render the days of the month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      calendarDays.push(
        <GridItem
          key={i}
          borderRadius="full"
          bg={selectedDate === i ? "teal.400" : "gray.200"}
          p={2}
          textAlign="center"
          cursor="pointer"
          onClick={() => handleDateClick(i)}
        >
          {i}
        </GridItem>
      );
    }

    return calendarDays;
  };

  const renderFilteredSchedule = () => {
    if (filteredSchedule.length > 4 && !showMore) {
      return (
        <>
          {filteredSchedule.slice(0, 4).map((item) => (
            <Tr key={item.id}>
              <Td>{item.date}</Td>
              <Td>{item.className}</Td>
              <Td>{item.time}</Td>
            </Tr>
          ))}
          <Tr>
            <Td colSpan={3} textAlign="center">
              <Button
                colorScheme="teal"
                leftIcon={<AddIcon />}
                onClick={handleShowMore}
              >
                Show More
              </Button>
            </Td>
          </Tr>
        </>
      );
    } else {
      return (
        <>
          {filteredSchedule.map((item) => (
            <Tr key={item.id}>
              <Td>{item.date}</Td>
              <Td>{item.className}</Td>
              <Td>{item.time}</Td>
            </Tr>
          ))}
          {filteredSchedule.length > 4 && (
            <Tr>
              <Td colSpan={3} textAlign="center">
                <Button
                  colorScheme="teal"
                  leftIcon={<MinusIcon />}
                  onClick={handleCollapse}
                >
                  Collapse
                </Button>
              </Td>
            </Tr>
          )}
        </>
      );
    }
  };

  return (
    <Box className="schedule-table">
      <Flex align="self" justify="space-between">
        <Button
          colorScheme="teal"
          onClick={handleOpenModal}
          alignSelf="center"
          mb={4}
        >
          Filter Schedules
        </Button>
        <Button colorScheme="teal" ml={2} alignSelf="center" mb={4} onClick = {handleSignout}>
          Signout
        </Button>
      </Flex>
      <Text as="h2" fontSize="xl" fontWeight="bold" mb={4}>
        Schedules
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Class Name</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {schedule.map((item) => (
            <Tr key={item.id}>
              <Td>{item.date}</Td>
              <Td>{item.className}</Td>
              <Td>{item.time}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center" justify="space-between">
              <IconButton
                icon={<ChevronLeftIcon />}
                onClick={handlePrevMonth}
                size="sm"
                aria-label="Previous Month"
              />
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                {getMonthName(selectedMonth)}
              </Text>
              <IconButton
                icon={<ChevronRightIcon />}
                onClick={handleNextMonth}
                size="sm"
                aria-label="Next Month"
              />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(7, 1fr)" gap={1} mb={4}>
              <Text textAlign="center">Sun</Text>
              <Text textAlign="center">Mon</Text>
              <Text textAlign="center">Tue</Text>
              <Text textAlign="center">Wed</Text>
              <Text textAlign="center">Thu</Text>
              <Text textAlign="center">Fri</Text>
              <Text textAlign="center">Sat</Text>
              {renderCalendarDays()}
            </Grid>

            {selectedDate && filteredSchedule.length > 0 ? (
              <Box>
                <Text fontWeight="bold" mb={2}>
                  Schedule for {getMonthName(selectedMonth)} {selectedDate}
                </Text>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Date</Th>
                      <Th>Class Name</Th>
                      <Th>Time</Th>
                    </Tr>
                  </Thead>
                  <Tbody>{renderFilteredSchedule()}</Tbody>
                </Table>
              </Box>
            ) : (
              <VStack>
                {selectedDate && (
                  <Text color="teal.500" fontSize="lg" fontWeight="bold" mb={4}>
                    No schedules for today
                  </Text>
                )}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ScheduleTable;
