import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

 class CheckboxesTags extends React.Component{
   render(){
    return (
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={this.props.playlists}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </React.Fragment>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
        )}
      />
    );
  }
}
export default CheckboxesTags