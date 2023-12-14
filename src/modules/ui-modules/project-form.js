import '../../css/project-form.css';
import { capitalize } from '../scripts/stringlib';
import { getTeams } from '../data';

function createTeamOption (teams) {
   const teamOption = [];
    teams.forEach((item) => {
        if (item.name === 'private' || item.name === 'general') return;
        teamOption.push(`<option value="${item.name}">${capitalize(item.name)}</option>`);
    });
    return teamOption.join('');
}

export default function projectForm() {
    return (
        `
            <div class="pform-heading-container">
                <span class="pform-heading">Add Project</span>
            </div>
            <form action="" id="pform">
                <div class="pform-field-container">
                    <label for="pname">Name</label>
                    <input type="text" name="pf-name" id="pname" autocomplete="off" required maxlength="50">
                </div>
                <div class="project-form-btn-container">
                    <div class="team-selector-container">
                        <select id="pform-team-selector">
                            <option value="Teams">Teams</option>
                            <option value="private">Private</option>
                            <option value="general">General</option>
                            ${createTeamOption(getTeams())}
                        </select>
                    </div>
                    <div class="pform-btn-container">
                        <input type="button" id="pf-cancel" class="pform-btns" value="cancel" data-fcid="PFC">
                        <input type="submit" id="pf-add" class="pform-btns" value="Add" data-fcid="PFC">
                    </div>
                </div>
            </form>
        `
    );
}