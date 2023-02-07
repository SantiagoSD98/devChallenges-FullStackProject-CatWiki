import { useState } from "react";
import { LogoCat } from "..";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./SearchBreed.module.css";
import SearchIcon from '@mui/icons-material/Search'

const SearchBreed = () => {

  const [openListOptions, setOpenListOptions] = useState<boolean>(false);

  const tempralOptions = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ];

  const onFocus = () => setOpenListOptions(true);
  const onBlur = () => setOpenListOptions(false);

  return (
    <Container fluid>
      <Row className={classes.searchBreedContainer}>
        <Col sm={12} md={6} lg={{ span: 4, offset: 1 }}>
          <LogoCat />
          <p className={classes.searchBreedText}>Get to know more about your cat breed</p>

          <div className={classes.inputContainer}>
            <input className={classes.textFieldStyles} onFocus={onFocus} onBlur={onBlur} placeholder="Enter your breed..." />
            <SearchIcon className={classes.iconSearch}/>

            {openListOptions && (
              <div className={classes.listOptions}>
                {tempralOptions.map((singleOption: any, index: number) => {
                  return (
                    <p key={index} className={classes.optionText}>{singleOption.label}</p>
                  )
                })}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default SearchBreed;