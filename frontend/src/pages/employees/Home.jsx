import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/spinner";
import Modal from "react-modal";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import CreateEmployee from "../employees/CreateEmployee";
import EditEmployee from "../employees/EditEmployee";
import DeleteEmployee from "../employees/DeleteEmployee";
import ShowEmployee from "../employees/ShowEmployee";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedInfoEmployeeId, setSelectedInfoEmployeeId] = useState(null);
  const [selectedEditEmployeeId, setSelectedEditEmployeeId] = useState(null);
  const [selectedDeleteEmployeeId, setSelectedDeleteEmployeeId] =
    useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/employees/`)
      .then((response) => {
        setEmployees(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching employees. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter employees based on search query
    if (searchQuery.trim() === "") {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter((employee) =>
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  }, [searchQuery, employees]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleDownClick = () => {
    if (startIndex + 10 < employees.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleUpClick = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-amber-50">Employees</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search employees"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-l"
          />
          <button onClick={openCreateModal}>
            <MdOutlineAddBox className="text-4xl text-red-600" />
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error && <p className="text-red-500">{error}</p>}
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">No</th>
                  <th className="px-4 py-2 border border-gray-300">
                    First Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Last Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Position</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Telephone
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Address</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees
                  .slice(startIndex, startIndex + 10)
                  .map((employee, index) => (
                    <tr key={index} className="text-gray-700">
                      <td className="px-4 py-2 border border-gray-300">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {employee.firstName}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {employee.lastName}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {employee.position}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {employee.telephone}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {employee.address}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="flex justify-center">
                          <button
                            onClick={() =>
                              setSelectedInfoEmployeeId(employee._id)
                            }
                          >
                            <BsInfoCircle className="text-green-800 text-2xl mx-2" />
                          </button>
                          <button
                            onClick={() =>
                              setSelectedEditEmployeeId(employee._id)
                            }
                          >
                            <AiOutlineEdit className="text-yellow-600 text-2xl mx-2" />
                          </button>
                          <button
                            onClick={() =>
                              setSelectedDeleteEmployeeId(employee._id)
                            }
                          >
                            <MdOutlineDelete className="text-red-600 text-2xl mx-2" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleUpClick}
          disabled={startIndex === 0}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Up
        </button>
        <button
          onClick={handleDownClick}
          disabled={startIndex + 10 >= employees.length}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Down
        </button>
      </div>
      {showCreateModal && (
        <Modal
          isOpen={showCreateModal}
          onRequestClose={() => setShowCreateModal(false)}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <CreateEmployee />
        </Modal>
      )}
      <Modal
        isOpen={selectedInfoEmployeeId !== null}
        onRequestClose={() => setSelectedInfoEmployeeId(null)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <ShowEmployee employeeId={selectedInfoEmployeeId} />
      </Modal>
      <Modal
        isOpen={selectedEditEmployeeId !== null}
        onRequestClose={() => setSelectedEditEmployeeId(null)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <EditEmployee employeeId={selectedEditEmployeeId} />
      </Modal>
      <Modal
        isOpen={selectedDeleteEmployeeId !== null}
        onRequestClose={() => setSelectedDeleteEmployeeId(null)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <DeleteEmployee employeeId={selectedDeleteEmployeeId} />
      </Modal>
    </div>
  );
};

export default Home;
