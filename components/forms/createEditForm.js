import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createEditForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}"required>
      </div>
      <div class="form-group">
        <label for="image">Select a Language</label>
        <select id="selectInput" class="form-select" placeholder="Language" value="${obj.language || ''}" required>
        <option value="" disabled selected>Select a Language</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        </select>
      </div>
  
    <button type="submit" class="btn btn-success text-white">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default createEditForm;
