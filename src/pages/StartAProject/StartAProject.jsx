import { contentStart } from "./data/contentStart";
import styles from "./StartAProject.module.css";


export default function StartAProject ({ lang }) {  
  const t = contentStart[lang];

  return (
    <section className={styles.mainContainer}>
      <div className={styles.headerLayout}>
        <h1 className={styles.headerTitle}>{t.title}</h1>
        <p className={styles.headerText}>{t.lead}</p>
      </div>

      <form
        className={styles.form}
        action="/api/start-a-project"
        method="POST"
        encType="multipart/form-data"
      >
        {/* SERVICES */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.services}
          </legend>

          <p className={styles.sectionDescription}>{t.servicesIntro}</p>

          <div className={styles.options}>
            {Object.entries(t.services).map(([key, label]) => (
              <label key={key} className={styles.option}>
                <input type="checkbox" name="services" value={key} />
                {label}
              </label>
            ))}
          </div>

          <textarea
            className={`${styles.textarea} ${styles.other}`}
            name="servicesOther"
            placeholder={t.project.otherPlaceholder}
            aria-label={t.project.other}
          />
        </fieldset>

        {/* PROJECT DETAILS */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.project}
          </legend>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.contentType}</span>
            <select className={styles.select} name="contentType">
              {Object.entries(t.project.contentTypeOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.sourceLanguage}</span>
            <input
              className={styles.input}
              name="sourceLanguage"
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.targetLanguages}</span>
            <input
              className={styles.input}
              name="targetLanguages"
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.subject}</span>
            <input className={styles.input} name="subject" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.audience}</span>
            <select className={styles.select} name="audience">
              {Object.entries(t.project.audienceOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.use}</span>
            <select className={styles.select} name="contentUse">
              {Object.entries(t.project.useOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.volume}</span>
            <select className={styles.select} name="volume">
              {Object.entries(t.project.volumeOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.formats}</span>
            <input className={styles.input} name="formats" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.finalized}</span>
            <select className={styles.select} name="sourceFinalized">
              {Object.entries(t.project.finalizedOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.project.changing}</span>
            <select className={styles.select} name="sourceChanging">
              {Object.entries(t.project.changingOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>
        </fieldset>

        {/* GAME */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            Game localization
          </legend>

          <label className={styles.field}>
            <span className={styles.label}>{t.game.what}</span>
            <textarea className={styles.textarea} name="gameContent" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.game.engine}</span>
            <select className={styles.select} name="gameEngine">
              {Object.entries(t.game.engineOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.game.setup}</span>
            <select className={styles.select} name="gameLocalizationSetup">
              {Object.entries(t.game.setupOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.game.build}</span>
            <select className={styles.select} name="gameBuild">
              {Object.entries(t.game.buildOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.game.testing}</span>
            <select className={styles.select} name="gameTesting">
              {Object.entries(t.game.testingOptions).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </fieldset>

        {/* AUDIOVISUAL */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            Subtitling / transcription / voice-over
          </legend>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.subtitling.what}
            </span>
            <textarea className={styles.textarea} name="subtitlingScope" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.subtitling.duration}
            </span>
            <input className={styles.input} name="videoDuration" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.subtitling.transcript}
            </span>
            <input
              className={styles.input}
              name="existingTranscript"
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.subtitling.timecodes}
            </span>
            <input
              className={styles.input}
              name="existingTimecodes"
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.subtitling.formats}
            </span>
            <input className={styles.input} name="subtitleFormat" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.recordingType}
            </span>
            <textarea className={styles.textarea} name="recordingType" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.duration}
            </span>
            <input
              className={styles.input}
              name="recordingDuration"
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.speakers}
            </span>
            <input className={styles.input} name="speakers" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.quality}
            </span>
            <textarea className={styles.textarea} name="audioQuality" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.transcriptType}
            </span>
            <textarea className={styles.textarea} name="transcriptType" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.transcription.timestamps}
            </span>
            <input className={styles.input} name="timestamps" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.voiceover.prepared}
            </span>
            <textarea className={styles.textarea} name="voiceoverScope" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.audiovisual.voiceover.production}
            </span>
            <select className={styles.select} name="voiceProduction">
              {Object.entries(
                t.audiovisual.voiceover.productionOptions
              ).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </fieldset>

        {/* RESOURCES */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.resources}
          </legend>

          <p className={styles.sectionDescription}>
            {t.resources.available}
          </p>

          <div className={styles.options}>
            {Object.entries(t.resources.options).map(([key, label]) => (
              <label key={key} className={styles.option}>
                <input type="checkbox" name="resources" value={key} />
                {label}
              </label>
            ))}
          </div>

          <textarea
            className={`${styles.textarea} ${styles.other}`}
            name="resourcesOther"
            placeholder={t.resources.otherPlaceholder}
            aria-label={t.resources.other}
          />
        </fieldset>

        {/* WORKFLOW */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.workflow}
          </legend>

          <p className={styles.sectionDescription}>{t.workflow.handle}</p>

          <div className={styles.options}>
            {Object.entries(t.workflow.handleOptions).map(([key, label]) => (
              <label key={key} className={styles.option}>
                <input type="checkbox" name="scope" value={key} />
                {label}
              </label>
            ))}
          </div>

          <label className={styles.field}>
            <span className={styles.label}>{t.workflow.remaining}</span>
            <select className={styles.select} name="remainingWorkflow">
              {Object.entries(t.workflow.remainingOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.workflow.deliverables}</span>
            <textarea
              className={styles.textarea}
              name="deliverables"
              placeholder={t.workflow.deliverablesPlaceholder}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.workflow.notes}</span>
            <textarea
              className={styles.textarea}
              name="workflowNotes"
              placeholder={t.workflow.notesPlaceholder}
            />
          </label>
        </fieldset>

        {/* COLLABORATION */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.collaboration}
          </legend>

          <p className={styles.capacityNotice}>
            {t.collaboration.capacity}
          </p>

          <p className={styles.sectionDescription}>
            {t.collaboration.type}
          </p>

          <div className={styles.options}>
            {Object.entries(t.collaboration.typeOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input
                    type="checkbox"
                    name="collaborationType"
                    value={key}
                  />
                  {label}
                </label>
              )
            )}
          </div>

          <label className={styles.field}>
            <span className={styles.label}>{t.collaboration.workload}</span>
            <select className={styles.select} name="workload">
              {Object.entries(t.collaboration.workloadOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.collaboration.start}</span>
            <select className={styles.select} name="start">
              {Object.entries(t.collaboration.startOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.collaboration.startDate}</span>
            <input className={styles.input} name="startDate" type="date" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.collaboration.deadline}</span>
            <select className={styles.select} name="deadline">
              {Object.entries(t.collaboration.deadlineOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.collaboration.deadlineDate}
            </span>
            <input className={styles.input} name="deadlineDate" type="date" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.collaboration.milestones}</span>
            <select className={styles.select} name="milestones">
              {Object.entries(t.collaboration.milestonesOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.collaboration.milestoneDetails}
            </span>
            <textarea
              className={styles.textarea}
              name="milestoneDetails"
              placeholder={t.collaboration.milestonePlaceholder}
            />
          </label>

          <p className={styles.sectionDescription}>
            {t.collaboration.flexibility}
          </p>

          <div className={styles.options}>
            {Object.entries(t.collaboration.flexibilityOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input
                    type="radio"
                    name="timelineFlexibility"
                    value={key}
                  />
                  {label}
                </label>
              )
            )}
          </div>
        </fieldset>

        {/* COMMERCIAL */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.commercial}
          </legend>

          <p className={styles.sectionDescription}>{t.commercial.pricing}</p>

          <div className={styles.options}>
            {Object.entries(t.commercial.pricingOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input type="checkbox" name="pricingModel" value={key} />
                  {label}
                </label>
              )
            )}
          </div>

          <p className={styles.sectionDescription}>{t.commercial.budget}</p>

          <div className={styles.options}>
            {Object.entries(t.commercial.budgetOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input type="radio" name="budgetType" value={key} />
                  {label}
                </label>
              )
            )}
          </div>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.commercial.budgetValue}
            </span>
            <input
              className={styles.input}
              name="budgetValue"
              type="text"
              placeholder={t.commercial.budgetPlaceholder}
            />
          </label>

          <p className={styles.sectionDescription}>{t.commercial.payment}</p>

          <div className={styles.options}>
            {Object.entries(t.commercial.paymentOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input type="checkbox" name="paymentTerms" value={key} />
                  {label}
                </label>
              )
            )}
          </div>

          <p className={styles.sectionDescription}>{t.commercial.contract}</p>

          <div className={styles.options}>
            {Object.entries(t.commercial.contractOptions).map(
              ([key, label]) => (
                <label key={key} className={styles.option}>
                  <input
                    type="checkbox"
                    name="contractRequirements"
                    value={key}
                  />
                  {label}
                </label>
              )
            )}
          </div>

          <textarea
            className={`${styles.textarea} ${styles.other}`}
            name="commercialOther"
            placeholder={t.commercial.otherPlaceholder}
            aria-label={t.commercial.other}
          />
        </fieldset>

        {/* CONTACT */}

        <fieldset className={styles.section}>
          <legend className={styles.sectionTitle}>
            {t.sections.contact}
          </legend>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.name}</span>
            <input
              className={styles.input}
              name="name"
              type="text"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.company}</span>
            <input className={styles.input} name="company" type="text" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.email}</span>
            <input
              className={styles.input}
              name="email"
              type="email"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.website}</span>
            <input className={styles.input} name="website" type="url" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>
              {t.contact.contactMethod}
            </span>
            <select className={styles.select} name="contactMethod">
              {Object.entries(t.contact.contactOptions).map(
                ([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.additional}</span>
            <textarea
              className={styles.textarea}
              name="additionalInformation"
              placeholder={t.contact.additionalPlaceholder}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.contact.files}</span>
            <input
              className={styles.input}
              name="files"
              type="file"
              multiple
            />
          </label>

          <p className={styles.hint}>{t.contact.filesHint}</p>

          <p className={styles.sectionDescription}>{t.contact.next}</p>

          <div className={styles.options}>
            {Object.entries(t.contact.nextOptions).map(([key, label]) => (
              <label key={key} className={styles.option}>
                <input type="checkbox" name="nextStep" value={key} />
                {label}
              </label>
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.submit} type="submit">
              {t.contact.submit}
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
