export default function teamForm() {
    return (
        `
            <div class="tform-heading-container">
                <span class="tform-heading">Add Team</span>
            </div>
            <form id="tform">
                <div class="tform-field-container">
                    <label for="tname">Name</label>
                    <input type="text" name="tfname" id="tname" autocomplete="off" required maxlength="50">
                </div>
                <div class="team-form-btn-container">
                    <div class="tform-btn-container">
                        <input type="button" id="tf-cancel" class="tform-btns" value="cancel" data-fcid="TFC">
                        <input type="submit" id="tf-add" class="tform-btns" value="Add" data-fcid="TFC">
                    </div>
                </div>
            </form>
        `
    );
}