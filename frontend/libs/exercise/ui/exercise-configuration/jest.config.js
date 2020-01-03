module.exports = {
  name: 'exercise-ui-exercise-configuration',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/exercise/ui/exercise-configuration',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
