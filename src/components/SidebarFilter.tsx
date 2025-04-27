
import { Form, Button } from "react-bootstrap";
import { Search } from "lucide-react";
import { useState } from "react";

interface SidebarFilterProps {
  setSearchTerm: (term: string) => void;
  setSelectedLocation: (location: string) => void;
}

const SidebarFilter = ({ setSearchTerm, setSelectedLocation }: SidebarFilterProps) => {
  const [localSearch, setLocalSearch] = useState("");
  const [localLocation, setLocalLocation] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<number>(50000);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleJobTypeChange = (type: string) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };

  const handleExperienceChange = (level: string) => {
    if (selectedExperience.includes(level)) {
      setSelectedExperience(selectedExperience.filter(e => e !== level));
    } else {
      setSelectedExperience([...selectedExperience, level]);
    }
  };

  const handleDatePostedChange = (date: string) => {
    if (selectedDatePosted.includes(date)) {
      setSelectedDatePosted(selectedDatePosted.filter(d => d !== date));
    } else {
      setSelectedDatePosted([...selectedDatePosted, date]);
    }
  };

  const handleSearch = () => {
    setSearchTerm(localSearch);
    setSelectedLocation(localLocation);
  };

  const handleShowMore = (section: string) => {
    // This would expand the section in a real implementation
    console.log(`Show more for ${section}`);
  };

  return (
    <div className="sidebar-filter bg-white p-4 rounded shadow-sm mb-4">
      <h5>Search by Job Title</h5>
      <div className="input-group mb-4">
        <span className="input-group-text bg-white border-end-0">
          <Search size={18} />
        </span>
        <Form.Control
          placeholder="Job title or company"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="border-start-0"
        />
      </div>

      <h5>Location</h5>
      <Form.Select 
        className="mb-4"
        value={localLocation}
        onChange={(e) => setLocalLocation(e.target.value)}
      >
        <option value="">Select city</option>
        <option value="Remote">Remote</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="London">London</option>
        <option value="Berlin">Berlin</option>
        <option value="Singapore">Singapore</option>
      </Form.Select>

      <h5>Category</h5>
      <div className="mb-3">
        {["Technology", "Marketing", "Design & Creative", "Education", "Finance & Banking"].map((category) => (
          <Form.Check 
            key={category}
            type="checkbox"
            label={category}
            className="mb-2"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
        ))}
        <Button variant="link" className="p-0 text-decoration-none" onClick={() => handleShowMore("categories")}>
          Show More
        </Button>
      </div>

      <h5>Job Type</h5>
      <div className="mb-3">
        {["Full Time", "Part Time", "Contract", "Freelance", "Internship"].map((type) => (
          <Form.Check 
            key={type}
            type="checkbox"
            label={type}
            className="mb-2"
            checked={selectedJobTypes.includes(type)}
            onChange={() => handleJobTypeChange(type)}
          />
        ))}
      </div>

      <h5>Experience Level</h5>
      <div className="mb-3">
        {["Fresher", "Intermediate", "Experienced"].map((level) => (
          <Form.Check 
            key={level}
            type="checkbox"
            label={level}
            className="mb-2"
            checked={selectedExperience.includes(level)}
            onChange={() => handleExperienceChange(level)}
          />
        ))}
      </div>

      <h5>Date Posted</h5>
      <div className="mb-3">
        {["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"].map((date) => (
          <Form.Check 
            key={date}
            type="radio"
            name="datePosted"
            label={date}
            className="mb-2"
            checked={selectedDatePosted.includes(date)}
            onChange={() => handleDatePostedChange(date)}
          />
        ))}
      </div>

      <h5>Salary</h5>
      <Form.Range
        min={0}
        max={100000}
        step={1000}
        value={salaryRange}
        onChange={(e) => setSalaryRange(parseInt(e.target.value))}
        className="mb-2"
      />
      <div className="d-flex justify-content-between mb-4">
        <span>$0</span>
        <span>${salaryRange.toLocaleString()}</span>
      </div>

      <Button variant="primary" className="w-100" onClick={handleSearch}>Apply Filters</Button>
    </div>
  );
};

export default SidebarFilter;
